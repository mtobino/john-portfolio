import { useState, useEffect, useRef, ReactNode } from 'react';
import GalleryFilters from './GalleryFilters';
import { Media } from '../types/media';

interface MediaGalleryProps {
  items: Media[];
  renderItem: (item: Media, viewMode: 'grid' | 'list') => ReactNode;
  itemsPerPage?: number;
  title: string;
  description?: string;
  showViewToggle?: boolean;
}

const MediaGallery = ({
  items,
  renderItem,
  itemsPerPage = 4,
  title,
  description,
  showViewToggle = true,
}: MediaGalleryProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [displayedItems, setDisplayedItems] = useState(itemsPerPage);
  const [hasMore, setHasMore] = useState(true);
  
  const observerTarget = useRef<HTMLDivElement>(null);

  // Get unique categories from all items
  const categories = ["all", ...new Set(items.flatMap(item => item.category))];

  // Filter items
  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategories = selectedCategories.length === 0 || 
      selectedCategories.some(cat => item.category.includes(cat));
    return matchesSearch && matchesCategories;
  });

  // Get current page of items
  const currentItems = filteredItems.slice(0, displayedItems);

  // Infinite scroll setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setDisplayedItems(prev => {
            const next = prev + itemsPerPage;
            if (next >= filteredItems.length) {
              setHasMore(false);
            }
            return next;
          });
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [filteredItems.length, hasMore, itemsPerPage]);

  // Reset displayed items when filters change
  useEffect(() => {
    setDisplayedItems(itemsPerPage);
    setHasMore(true);
  }, [searchTerm, selectedCategories, itemsPerPage]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">{title}</h1>
      {description && (
        <p className="text-base text-center mb-8">{description}</p>
      )}

      <GalleryFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        categories={categories}
        isFiltersOpen={isFiltersOpen}
        setIsFiltersOpen={setIsFiltersOpen}
        viewMode={viewMode}
        setViewMode={setViewMode}
        showViewToggle={showViewToggle}
      />

      {/* Results Count */}
      <div className="mb-4 text-gray-600">
        Showing {currentItems.length} of {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
      </div>

      {/* Items Container */}
      {currentItems.length > 0 ? (
        <>
          <div className={`
            ${viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 gap-6' 
              : 'space-y-8'
            }
          `}>
            {currentItems.map((item, index) => renderItem(item, viewMode))}
          </div>

          {/* Loading indicator and observer target */}
          <div ref={observerTarget} className="py-4">
            {hasMore && (
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No items found matching your criteria
        </div>
      )}
    </div>
  );
};

export default MediaGallery; 
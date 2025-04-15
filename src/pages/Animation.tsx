import { useState, useEffect, useRef } from "react";
import AnimationContainer from "../components/AnimationContainer";
import { useAnimationData } from "../hooks/useAnimationData";

const VIDEOS_PER_PAGE = 4; // Adjust this number based on your needs

const Animation = () => {
  const { videos, isLoading, error } = useAnimationData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [displayedVideos, setDisplayedVideos] = useState<number>(VIDEOS_PER_PAGE);
  const [hasMore, setHasMore] = useState(true);
  
  const observerTarget = useRef<HTMLDivElement>(null);

  // Get unique categories from videos
  const categories = ["all", ...new Set(videos.map(video => video.category))];

  // Filter videos based on search term and category
  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get the current page of videos
  const currentVideos = filteredVideos.slice(0, displayedVideos);

  // Intersection Observer setup for infinite scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          // Load more videos when the observer target is visible
          setDisplayedVideos(prev => {
            const next = prev + VIDEOS_PER_PAGE;
            if (next >= filteredVideos.length) {
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
  }, [filteredVideos.length, hasMore]);

  // Reset displayed videos when filters change
  useEffect(() => {
    setDisplayedVideos(VIDEOS_PER_PAGE);
    setHasMore(true);
  }, [searchTerm, selectedCategory]);

  if (isLoading) {
    return <div className="text-center py-8">Loading animations...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Animations</h1>
      <p className="text-base text-center mb-8">
        Here is a collection of some of my animation work through the years.
      </p>

      {/* Controls Bar */}
      <div className="bg-white shadow rounded-lg mb-6">
        {/* Top Bar with Toggle Buttons */}
        <div className="p-4 flex justify-between items-center border-b">
          <button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
          >
            <svg
              className={`w-5 h-5 transform transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            <span>Filters</span>
          </button>

          {/* View Toggle */}
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
              title="Grid View"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
              title="List View"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Collapsible Filters Section */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isFiltersOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="p-4 space-y-4">
            {/* Search Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search animations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4 text-gray-600">
        Showing {currentVideos.length} of {filteredVideos.length} animation{filteredVideos.length !== 1 ? 's' : ''}
      </div>

      {/* Videos Container */}
      {currentVideos.length > 0 ? (
        <>
          <div className={`
            ${viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 gap-6' 
              : 'space-y-8'
            }
          `}>
            {currentVideos.map((video, index) => (
              <AnimationContainer
                key={`${video.title}-${index}`}
                video={video.link}
                title={video.title}
                description={video.description}
                viewMode={viewMode}
              />
            ))}
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
          No animations found matching your criteria
        </div>
      )}
    </div>
  );
};

export default Animation;
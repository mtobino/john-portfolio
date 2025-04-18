import { useState } from "react";
import { useMediaData } from "../hooks/useMediaData";
import MediaGallery from "../components/MediaGallery";
import AnimationContainer from "../components/AnimationContainer";
import ArtContainer from "../components/ArtContainer";
import { Media } from "../types/media";

const Gallery = () => {
  const { animations, artworks, isLoading, error } = useMediaData();
  const [activeTab, setActiveTab] = useState<'all' | 'animations' | 'art'>('all');

  if (isLoading) {
    return <div className="text-center py-8">Loading gallery...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error.message}</div>;
  }

  const allItems = [...animations, ...artworks];

  const filteredItems = activeTab === 'all' 
    ? allItems 
    : activeTab === 'animations' 
      ? animations 
      : artworks;

  const renderItem = (item: Media, viewMode: 'grid' | 'list') => {
    if ('link' in item && !item.link.includes('youtube.com')) {
      return (
        <ArtContainer
          key={item.title}
          title={item.title}
          link={item.link}
          description={item.description}
          category={item.category}
          viewMode={viewMode}
        />
      );
    } else {
      return (
        <AnimationContainer
          key={item.title}
          video={item.link}
          title={item.title}
          description={item.description}
          categories={item.category}
          viewMode={viewMode}
        />
      );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Gallery</h1>
      <p className="text-center text-gray-600 mb-8">
        Explore my collection of animations and artwork
      </p>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
          {(['all', 'animations', 'art'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                ${activeTab === tab
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Content */}
      <MediaGallery
        items={filteredItems}
        renderItem={renderItem}
        title={activeTab === 'all' ? 'All Works' : activeTab === 'animations' ? 'Animations' : 'Artwork'}
        description={
          activeTab === 'all' 
            ? 'Browse through all my creative works' 
            : activeTab === 'animations' 
              ? 'A collection of my animation work' 
              : 'A showcase of my artwork and illustrations'
        }
      />
    </div>
  );
};

export default Gallery;
import { useState } from 'react';

interface ArtProps {
  title: string;
  link: string;
  description: string;
  category: string[];
  viewMode: 'grid' | 'list';
}

const ArtContainer = ({ title, link, description, category, viewMode }: ArtProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isImageError, setIsImageError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsImageError(true);
    setIsLoading(false);
  };

  return (
    <div className={`
      bg-white rounded-lg shadow-md overflow-hidden
      ${viewMode === 'grid' ? 'h-full' : ''}
    `}>
      <div className={`
        ${viewMode === 'grid' 
          ? 'block' 
          : 'flex flex-col md:flex-row md:items-start'
        }
      `}>
        {/* Image Container */}
        <div className={`
          relative
          ${viewMode === 'grid' 
            ? 'w-full aspect-square' 
            : 'md:w-2/3'
          }
        `}>
          {isLoading && (
            <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
              <div className="text-gray-400">Loading...</div>
            </div>
          )}
          
          {isImageError ? (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <div className="text-gray-500">Failed to load image</div>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <img
                src={link}
                alt={title}
                onLoad={handleImageLoad}
                onError={handleImageError}
                className={`
                  w-full h-full object-contain
                  ${viewMode === 'grid' ? 'aspect-square' : 'max-h-[600px]'}
                  ${isLoading ? 'opacity-0' : 'opacity-100'}
                  transition-opacity duration-300
                `}
              />
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className={`
          p-4
          ${viewMode === 'grid' 
            ? '' 
            : 'md:w-1/3'
          }
        `}>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {category.map((cat) => (
              <span 
                key={cat}
                className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* View Full Size Link */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-500 hover:text-blue-600 transition-colors"
          >
            View Full Size
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArtContainer;


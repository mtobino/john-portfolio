import { useState } from "react";
import YoutubeVideo from "./YoutubeVideo";

interface AnimationContainerProps {
  video: string;
  title: string;
  description: string;
  categories: string[];
  viewMode: 'grid' | 'list';
}

const AnimationContainer = ({ video, title, description, categories, viewMode }: AnimationContainerProps) => {
  const [isError, _] = useState(false);

  function extractVideoId(video_link: string): string {
    try {
      const url = new URL(video_link);
      return url.searchParams.get('v') || url.pathname.split('/').pop() || '';
    } catch (error) {
      console.warn('Invalid URL:', video_link);
      return '';
    }
  }

  const videoId = extractVideoId(video);

  if (!videoId) {
    return (
      <div className="bg-red-50 p-4 rounded-lg">
        <p className="text-red-600">Invalid video URL</p>
      </div>
    );
  }

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
        <div className={`
          ${viewMode === 'grid' 
            ? 'w-full' 
            : 'md:w-2/3'
          }
        `}>
          {isError ? (
            <div className="bg-red-50 p-4 text-center">
              <p className="text-red-600">Failed to load video</p>
              <a 
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Watch on YouTube
              </a>
            </div>
          ) : (
            <YoutubeVideo
              videoId={videoId}
              title={title}
              height={viewMode === 'grid' ? '240' : '390'}
            />
          )}
        </div>
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
            {categories.map((cat) => (
              <span 
                key={cat}
                className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationContainer;
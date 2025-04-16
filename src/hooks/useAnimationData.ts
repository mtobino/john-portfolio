import { useState, useEffect } from 'react';
import animationData from '../assets/animation/animation-links.json';
import { Video } from '../types/animation';

export const useAnimationData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Video[]>([]);

  useEffect(() => {
    try {
      // Simulate async loading (remove setTimeout if using real API)
      setTimeout(() => {
        setData(animationData.videos);
        setIsLoading(false);
      }, 500);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load animation data'));
      setIsLoading(false);
    }
  }, []);

  const getVideoByTitle = (title: string): Video | undefined => {
    return data.find(video => video.title.includes(title));
  };

  const getVideosByCategory = (category: string): Video[] => {
    return data.filter(video => video.category === category);
  };

  return {
    videos: data,
    isLoading,
    error,
    getVideoByTitle,
    getVideosByCategory,
  };
}; 
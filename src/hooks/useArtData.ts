import { useState, useEffect } from 'react';
import artData from '../assets/art/art-links.json';
import { Art } from '../types/art';

export const useArtData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Art[]>([]);

  useEffect(() => {
    try {
      // Simulate async loading (remove setTimeout if using real API)
      setTimeout(() => {
        setData(artData.art);
        setIsLoading(false);
      }, 500);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load art data'));
      setIsLoading(false);
    }
  }, []);

  const getVideoByTitle = (title: string): Art | undefined => {
    return data.find(art => art.title.includes(title));
  };

  const getVideosByCategory = (category: string): Art[] => {
    return data.filter(art => art.category.includes(category));
  };

  return {
    artworks: data,
    isLoading,
    error,
    getVideoByTitle,
    getVideosByCategory,
  };
}; 
import { useState, useEffect } from 'react';
import { Media } from '../types/media'; 
import { Art } from '../types/art';
import { Video } from '../types/animation';
import artData from '../assets/art/art-links.json';
import animationData from '../assets/animation/animation-links.json';

export const useMediaData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [art, setArt] = useState<Art[]>([]);
  const [animation, setAnimation] = useState<Video[]>([]);

  useEffect(() => {
    try {
      // Simulate async loading (remove setTimeout if using real API)
      setTimeout(() => {
        
        setArt(artData.art);
        setAnimation(animationData.videos);

        setIsLoading(false);
      }, 500);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load media data'));
      setIsLoading(false);
    }
  }, []);

  const getMediaByTitle = (title: string): Media | undefined => {
    const allMedia = [...art, ...animation];
    return allMedia.find(media => media.title.includes(title));
  };

  const getMediaByCategory = (category: string): Media[] => {
    const allMedia = [...art, ...animation];
    return allMedia.filter(media => media.category.includes(category));
  };
  
  const getArtByTitle = (title: string): Media | undefined => {
    return art.find(art => art.title.includes(title));
  };

  const getArtByCategory = (category: string): Media[] => {
    return art.filter(art => art.category.includes(category));
  };
  const getAnimationByTitle = (title: string): Media | undefined => {
    return animation.find(art => art.title.includes(title));
  };

  const getAnimationByCategory = (category: string): Media[] => {
    return animation.filter(art => art.category.includes(category));
  };

  return {
    animations: animation,
    artworks: art,
    isLoading,
    error,
    getMediaByTitle,
    getMediaByCategory,
    getArtByTitle,
    getArtByCategory,
    getAnimationByCategory,
    getAnimationByTitle
  };
}; 
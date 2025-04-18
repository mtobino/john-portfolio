import { useMediaData } from "../hooks/useMediaData";
import MediaGallery from "../components/MediaGallery";
import AnimationContainer from "../components/AnimationContainer";
import { Media } from "../types/media";

const Animation = () => {
  const { animations, isLoading, error } = useMediaData();

  if (isLoading) {
    return <div className="text-center py-8">Loading animations...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error.message}</div>;
  }

  return (
    <MediaGallery
      items={animations}
      renderItem={(video: Media, viewMode) => (
        <AnimationContainer
          key={video.title}
          video={video.link}
          title={video.title}
          description={video.description}
          categories={video.category}
          viewMode={viewMode}
        />
      )}
      title="Animations"
      description="Here is a collection of some of my animation work through the years."
    />
  );
};

export default Animation;
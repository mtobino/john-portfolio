import { useAnimationData } from "../hooks/useAnimationData";
import MediaGallery from "../components/MediaGallery";
import AnimationContainer from "../components/AnimationContainer";
import { Video } from "../types/animation";

const Animation = () => {
  const { videos, isLoading, error } = useAnimationData();

  if (isLoading) {
    return <div className="text-center py-8">Loading animations...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error.message}</div>;
  }

  return (
    <MediaGallery
      items={videos}
      renderItem={(video, viewMode) => (
        <AnimationContainer
          key={video.title}
          video={video.link}
          title={video.title}
          description={video.description}
          viewMode={viewMode}
        />
      )}
      title="Animations"
      description="Here is a collection of some of my animation work through the years."
      getItemCategory={(video) => video.category}
      getItemTitle={(video) => video.title}
    />
  );
};

export default Animation;
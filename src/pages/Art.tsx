import { useMediaData } from "../hooks/useMediaData";
import MediaGallery from "../components/MediaGallery";
import ArtContainer from "../components/ArtContainer";

const Art = () => {
  const { artworks, isLoading, error } = useMediaData();

  if (isLoading) {
    return <div className="text-center py-8">Loading artwork...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error.message}</div>;
  }

  return (
    <MediaGallery
      items={artworks}
      renderItem={(artwork, viewMode) => (
        <ArtContainer
          key={artwork.title}
          title={artwork.title}
          link={artwork.link}
          description={artwork.description}
          category={artwork.category}
          viewMode={viewMode}
        />
      )}
      title="Art Gallery"
      description="Explore my collection of artwork and illustrations."
    />
  );
};

export default Art;
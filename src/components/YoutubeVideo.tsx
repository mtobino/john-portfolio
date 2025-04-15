interface YoutubeVideoProps {
  videoId: string;
  title: string;
  height?: string;
  width?: string;
}

const YoutubeVideo = ({ videoId, title, height = '390', width = '100%' }: YoutubeVideoProps) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?`

  return (
    <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        width={width}
        height={height}
        src={embedUrl}
        title={`${title} - YouTube video player`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
      />
    </div>
  );
};

export default YoutubeVideo; 
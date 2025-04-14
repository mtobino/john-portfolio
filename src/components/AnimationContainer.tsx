import YouTube, { YouTubeProps } from "react-youtube"

interface AnimationContainerProps {
  video: string;
  title: string;
  description: string;
}

const AnimationContainer = ({ video, title, description }: AnimationContainerProps) => {
  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0
    }
  }

  function extractVideoId(video_link: string): string {
    const url = new URL(video_link);
    return url.searchParams.get('v') || url.pathname.split('/').pop() || '';
  }

  return (
    <div className="max-w-2xl mx-auto mb-8 p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <YouTube videoId={extractVideoId(video)} opts={opts} className="mb-4"/>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

export default AnimationContainer;
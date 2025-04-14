import { useMemo, useState } from "react";
import AnimationContainer from "../components/AnimationContainer";
import animationData from "../assets/animation/animation-links.json";

const Animation = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Animations</h1>
      <div className="space-y-8">
        {animationData.videos.map((video, index) => (
          <AnimationContainer
            key={index}
            video={video.link}
            title={video.title}
            description={video.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Animation;
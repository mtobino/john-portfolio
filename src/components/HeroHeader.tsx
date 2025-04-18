import { ReactNode } from 'react';

interface HeroHeaderProps {
  title: string;
  imageUrl: string;
  children?: ReactNode;
}

const HeroHeader = ({ title, imageUrl, children }: HeroHeaderProps) => {
  return (
    <div className="relative w-full h-[400px] z-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4 text-center">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default HeroHeader; 
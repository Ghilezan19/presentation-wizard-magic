
import React from 'react';

interface SlideProps {
  title: string;
  visual: React.ReactNode;
  bulletPoints: string[];
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ title, visual, bulletPoints, isActive }) => {
  if (!isActive) return null;
  
  return (
    <div className="slide-container w-full h-full bg-[#121212] rounded-lg p-6 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-cyan-400 cyan-glow">{title}</h2>
      
      <div className="flex h-[calc(100%-3rem)]">
        {/* Left side - Visual */}
        <div className="visual-container w-1/2 pr-6 flex items-center justify-center">
          <div className="w-full max-w-md">{visual}</div>
        </div>
        
        {/* Right side - Bullet points */}
        <div className="w-1/2 pl-6 flex flex-col justify-center">
          <ul className="space-y-6">
            {bulletPoints.map((point, index) => (
              <li key={index} className="bullet-point text-lg text-gray-200">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slide;

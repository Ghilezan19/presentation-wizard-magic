
import React, { useEffect, useState } from 'react';

interface TitleSlideProps {
  title: string;
  subtitle?: string;
  isActive: boolean;
}

const TitleSlide: React.FC<TitleSlideProps> = ({ title, subtitle, isActive }) => {
  const [iconVisible, setIconVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      // Staggered animation sequence
      setIconVisible(false);
      setTitleVisible(false);
      setSubtitleVisible(false);

      const iconTimer = setTimeout(() => setIconVisible(true), 300);
      const titleTimer = setTimeout(() => setTitleVisible(true), 800);
      const subtitleTimer = setTimeout(() => setSubtitleVisible(true), 1200);

      return () => {
        clearTimeout(iconTimer);
        clearTimeout(titleTimer);
        clearTimeout(subtitleTimer);
      };
    }
  }, [isActive]);

  if (!isActive) return null;
  
  return (
    <div className="slide-container w-full h-full bg-[#121212] rounded-lg p-6 flex flex-col items-center justify-center">
      <div 
        className={`mb-8 svg-icon ${iconVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        style={{ transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        <svg className="w-32 h-32 text-cyan-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 16v-4a4 4 0 0 0-8 0v4"></path>
          <path d="M12 12v8"></path>
          <path d="M8 16h8"></path>
          <path d="M18 4h2a2 2 0 0 1 2 2v2"></path>
          <path d="M4 8V6a2 2 0 0 1 2-2h2"></path>
          <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
          <path d="M18 20h2a2 2 0 0 0 2-2v-2"></path>
        </svg>
      </div>
      
      <h1 
        className={`premium-title text-4xl font-bold mb-4 text-center cyan-glow ${titleVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}
        style={{ transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        {title}
      </h1>
      
      {subtitle && (
        <p 
          className={`text-xl text-cyan-300 ${subtitleVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}
          style={{ transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default TitleSlide;

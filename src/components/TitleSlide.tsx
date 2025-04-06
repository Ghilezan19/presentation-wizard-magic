
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
  const [particles, setParticles] = useState<{id: number, left: string, delay: string}[]>([]);

  useEffect(() => {
    if (isActive) {
      // Staggered animation sequence
      setIconVisible(false);
      setTitleVisible(false);
      setSubtitleVisible(false);

      const iconTimer = setTimeout(() => setIconVisible(true), 300);
      const titleTimer = setTimeout(() => setTitleVisible(true), 800);
      const subtitleTimer = setTimeout(() => setSubtitleVisible(true), 1200);
      
      // Generate random particles
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 10}s`,
      }));
      
      setParticles(newParticles);

      return () => {
        clearTimeout(iconTimer);
        clearTimeout(titleTimer);
        clearTimeout(subtitleTimer);
      };
    }
  }, [isActive]);

  if (!isActive) return null;
  
  return (
    <div className="slide-container premium-slide-container w-full h-full bg-gradient-to-br from-[#0c0c15] via-[#121220] to-[#0c0c15] rounded-lg p-6 flex flex-col items-center justify-center border border-cyan-900/30 premium-border">
      <div className="particle-container">
        {particles.map((particle) => (
          <div 
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>
      
      <div 
        className={`mb-8 svg-icon premium-float premium-pulse ${iconVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        style={{ transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        <svg className="w-32 h-32 text-transparent bg-gradient-to-br from-cyan-400 to-blue-600 bg-clip-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        className={`premium-title text-4xl md:text-5xl font-bold mb-6 text-center cyan-glow title-glow ${titleVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}
        style={{ transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        {title}
      </h1>
      
      {subtitle && (
        <p 
          className={`text-xl md:text-2xl text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text ripple-effect ${subtitleVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}
          style={{ transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default TitleSlide;

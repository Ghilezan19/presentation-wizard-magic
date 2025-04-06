
import React, { useEffect, useState } from 'react';

interface SlideProps {
  title: string;
  visual: React.ReactNode;
  bulletPoints: string[];
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ title, visual, bulletPoints, isActive }) => {
  const [visible, setVisible] = useState(false);
  const [visibleBullets, setVisibleBullets] = useState<number[]>([]);

  useEffect(() => {
    if (isActive) {
      setVisible(true);
      
      // Stagger the bullet points animation
      setVisibleBullets([]);
      const bulletTimers = bulletPoints.map((_, index) => {
        return setTimeout(() => {
          setVisibleBullets(prev => [...prev, index]);
        }, 300 + (index * 150));
      });
      
      return () => {
        bulletTimers.forEach(timer => clearTimeout(timer));
      };
    } else {
      setVisible(false);
      setVisibleBullets([]);
    }
  }, [isActive, bulletPoints.length]);
  
  if (!isActive) return null;
  
  return (
    <div className="slide-container w-full h-full bg-gradient-to-br from-[#0c0c15] via-[#121220] to-[#0c0c15] rounded-lg p-6 animate-fade-in border border-cyan-900/30">
      <h2 className="premium-title text-2xl font-bold mb-6 cyan-glow">{title}</h2>
      
      <div className="flex h-[calc(100%-3rem)]">
        {/* Left side - Visual */}
        <div className="visual-container w-1/2 pr-6 flex items-center justify-center">
          <div 
            className={`w-full max-w-md svg-icon ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transition: 'all 0.5s ease-out' }}
          >
            {visual}
          </div>
        </div>
        
        {/* Right side - Bullet points */}
        <div className="w-1/2 pl-6 flex flex-col justify-center">
          <ul className="space-y-6">
            {bulletPoints.map((point, index) => (
              <li 
                key={index}
                className={`bullet-point text-lg text-gray-200 ${visibleBullets.includes(index) ? 'opacity-100' : 'opacity-0'}`}
                style={{ 
                  transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)', 
                  transitionDelay: `${index * 0.15}s` 
                }}
              >
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


import React, { useState, useEffect } from 'react';

const SimpleSpaceBackground: React.FC = () => {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; animationDelay: number; animationDuration: number }>>([]);
  
  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 1000);
      const newStars = [];
      
      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          animationDelay: Math.random() * 5,
          animationDuration: Math.random() * 3 + 2
        });
      }
      
      setStars(newStars);
    };
    
    generateStars();
    
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a0a2a] to-[#1a0b2e]">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: Math.random() * 0.5 + 0.5,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`
            }}
          />
        ))}
        
        {/* Add some nebula-like elements */}
        <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vh] rounded-full bg-[#8a2be2]/10 blur-[100px] animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[60%] left-[60%] w-[25vw] h-[25vh] rounded-full bg-[#ff00ff]/10 blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[30%] left-[70%] w-[20vw] h-[20vh] rounded-full bg-[#00ffff]/10 blur-[100px] animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(10px); }
          50% { transform: translateY(-20px) translateX(0); }
          75% { transform: translateY(-10px) translateX(-10px); }
        }
        
        .particle {
          position: absolute;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
          border-radius: 50%;
          animation: floatParticle 15s infinite ease-in-out;
        }
      `}} />
    </div>
  );
};

export default SimpleSpaceBackground;

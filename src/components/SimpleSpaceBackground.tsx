
import React, { useState, useEffect, useRef } from 'react';

const SimpleSpaceBackground: React.FC = () => {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; animationDelay: number; animationDuration: number; depth: number }>>([]);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    // Generate random stars with varying depths
    const generateStars = () => {
      const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 800);
      const newStars = [];
      
      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          animationDelay: Math.random() * 5,
          animationDuration: Math.random() * 3 + 2,
          depth: Math.random() * 3 + 1 // Depth factor for parallax effect
        });
      }
      
      setStars(newStars);
    };
    
    generateStars();
    
    // Track mouse position for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      };
      
      if (backgroundRef.current) {
        const stars = backgroundRef.current.querySelectorAll('.star');
        stars.forEach((star: Element, index) => {
          const depth = Number((star as HTMLElement).dataset.depth) || 1;
          const translateX = mousePosition.current.x * 10 * depth;
          const translateY = mousePosition.current.y * 10 * depth;
          (star as HTMLElement).style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
      }
    };
    
    window.addEventListener('resize', generateStars);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', generateStars);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]" ref={backgroundRef}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a0a2a] to-[#1a0b2e]">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute bg-white rounded-full animate-twinkle star"
            data-depth={star.depth}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: Math.random() * 0.5 + 0.5,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
              filter: `blur(${star.size > 1.5 ? 0 : 1}px)`,
              transition: 'transform 0.2s ease-out'
            }}
          />
        ))}
        
        {/* Enhanced nebula-like elements with glow effects */}
        <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vh] rounded-full bg-[#8a2be2]/10 blur-[120px] animate-float-slow" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[60%] left-[60%] w-[35vw] h-[35vh] rounded-full bg-[#ff00ff]/10 blur-[120px] animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[30%] left-[70%] w-[30vw] h-[30vh] rounded-full bg-[#00ffff]/10 blur-[120px] animate-float-slow" style={{ animationDelay: '4s' }} />
        
        {/* Add some shooting stars */}
        <div className="absolute w-[2px] h-[80px] bg-gradient-to-b from-transparent via-white to-transparent opacity-0 animate-shooting-star" style={{ top: '20%', left: '70%', animationDelay: '3s' }}></div>
        <div className="absolute w-[2px] h-[60px] bg-gradient-to-b from-transparent via-white to-transparent opacity-0 animate-shooting-star" style={{ top: '40%', left: '30%', animationDelay: '7s' }}></div>
        <div className="absolute w-[2px] h-[70px] bg-gradient-to-b from-transparent via-white to-transparent opacity-0 animate-shooting-star" style={{ top: '70%', left: '60%', animationDelay: '12s' }}></div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(10px); }
          50% { transform: translateY(-20px) translateX(0); }
          75% { transform: translateY(-10px) translateX(-10px); }
        }
        
        @keyframes shootingStar {
          0% { 
            transform: translateY(0) translateX(0) rotate(35deg); 
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% { 
            transform: translateY(100px) translateX(-100px) rotate(35deg); 
            opacity: 0;
          }
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

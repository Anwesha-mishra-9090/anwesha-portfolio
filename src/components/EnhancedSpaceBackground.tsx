
import React, { useState, useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  animationDelay: number;
  animationDuration: number;
  depth: number;
}

interface Planet {
  x: number;
  y: number;
  size: number;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  rotationAngle: number;
  hasRing: boolean;
  ringColor: string;
  moons: Moon[];
}

interface Moon {
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
  rotationAngle: number;
  color: string;
}

interface Nebula {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  animationDelay: number;
}

const EnhancedSpaceBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [nebulae, setNebulae] = useState<Nebula[]>([]);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  
  // Generate planets
  useEffect(() => {
    // Generate random planets
    const generatePlanets = () => {
      const numberOfPlanets = 4;
      const newPlanets: Planet[] = [];
      
      const planetColors = [
        'linear-gradient(to right, #ff9966, #ff5e62)', // Mars-like
        'linear-gradient(to right, #4facfe, #00f2fe)', // Earth-like
        'linear-gradient(to right, #fdcf58, #f78a3d)', // Jupiter-like
        'linear-gradient(to right, #a18cd1, #fbc2eb)', // Neptune-like
        'linear-gradient(to right, #f5ce62, #e43603)', // Saturn-like
      ];
      
      const ringColors = [
        'linear-gradient(to right, rgba(245, 206, 98, 0.5), rgba(228, 54, 3, 0.2))',
        'linear-gradient(to right, rgba(161, 140, 209, 0.5), rgba(251, 194, 235, 0.2))',
      ];
      
      for (let i = 0; i < numberOfPlanets; i++) {
        const x = 10 + Math.random() * 80;
        const y = 10 + Math.random() * 80;
        const size = Math.random() * 80 + 40; // 40-120px
        const orbitRadius = 0;
        const orbitSpeed = Math.random() * 200 + 100; // 100-300s
        const rotationAngle = Math.random() * 360;
        const hasRing = Math.random() > 0.5;
        
        // Generate moons
        const numberOfMoons = Math.floor(Math.random() * 3);
        const moons: Moon[] = [];
        
        for (let j = 0; j < numberOfMoons; j++) {
          moons.push({
            size: size * 0.2 * Math.random() + 0.1, // 10-30% of planet size
            orbitRadius: size * 0.8 + Math.random() * size * 0.4, // 80-120% of planet size
            orbitSpeed: Math.random() * 10 + 5, // 5-15s
            rotationAngle: Math.random() * 360,
            color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.8)`,
          });
        }
        
        newPlanets.push({
          x,
          y,
          size,
          color: planetColors[Math.floor(Math.random() * planetColors.length)],
          orbitRadius,
          orbitSpeed,
          rotationAngle,
          hasRing,
          ringColor: ringColors[Math.floor(Math.random() * ringColors.length)],
          moons,
        });
      }
      
      setPlanets(newPlanets);
    };
    
    generatePlanets();
  }, []);
  
  // Generate stars and nebulae
  useEffect(() => {
    // Generate random stars with varying depths
    const generateStars = () => {
      const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 800);
      const newStars: Star[] = [];
      
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
    
    // Generate random nebulae
    const generateNebulae = () => {
      const numberOfNebulae = 3;
      const newNebulae: Nebula[] = [];
      
      const nebulaColors = [
        '#8a2be2', // Purple
        '#ff00ff', // Pink
        '#00ffff', // Cyan
        '#9932cc', // Dark orchid
        '#8b008b', // Dark magenta
      ];
      
      for (let i = 0; i < numberOfNebulae; i++) {
        newNebulae.push({
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
          width: Math.random() * 40 + 30, // 30-70vw
          height: Math.random() * 40 + 30, // 30-70vh
          color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
          animationDelay: Math.random() * 5,
        });
      }
      
      setNebulae(newNebulae);
    };
    
    generateStars();
    generateNebulae();
    
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
        
        const planets = backgroundRef.current.querySelectorAll('.planet');
        planets.forEach((planet: Element, index) => {
          const translateX = mousePosition.current.x * 5;
          const translateY = mousePosition.current.y * 5;
          (planet as HTMLElement).style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
        
        const nebulae = backgroundRef.current.querySelectorAll('.nebula');
        nebulae.forEach((nebula: Element, index) => {
          const translateX = mousePosition.current.x * 2;
          const translateY = mousePosition.current.y * 2;
          (nebula as HTMLElement).style.transform = `translate(${translateX}px, ${translateY}px)`;
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
        {/* Nebulae */}
        {nebulae.map((nebula, index) => (
          <div
            key={`nebula-${index}`}
            className="absolute rounded-full opacity-10 blur-[100px] nebula animate-float-slow"
            style={{
              left: `${nebula.x}%`,
              top: `${nebula.y}%`,
              width: `${nebula.width}vw`,
              height: `${nebula.height}vh`,
              background: nebula.color,
              animationDelay: `${nebula.animationDelay}s`,
              transition: 'transform 0.8s ease-out'
            }}
          />
        ))}
        
        {/* Stars */}
        {stars.map((star, index) => (
          <div
            key={`star-${index}`}
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
        
        {/* Planets */}
        {planets.map((planet, index) => (
          <div
            key={`planet-${index}`}
            className="absolute planet"
            style={{
              left: `${planet.x}%`,
              top: `${planet.y}%`,
              transition: 'transform 0.5s ease-out'
            }}
          >
            {/* Planet Ring (if has ring) */}
            {planet.hasRing && (
              <div 
                className="absolute rounded-full"
                style={{
                  width: `${planet.size * 1.6}px`,
                  height: `${planet.size * 0.4}px`,
                  background: planet.ringColor,
                  left: `${-planet.size * 0.3}px`,
                  top: `${planet.size * 0.3}px`,
                  transform: 'rotateX(75deg)',
                  zIndex: 1
                }}
              />
            )}
            
            {/* Planet Body */}
            <div
              className="rounded-full animate-rotate-slow"
              style={{
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                background: planet.color,
                boxShadow: `0 0 20px rgba(255, 255, 255, 0.2)`,
                position: 'relative',
                zIndex: 2,
                animationDuration: `${planet.orbitSpeed}s`
              }}
            >
              {/* Planet Surface Details */}
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full opacity-30"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)'
                }}
              />
            </div>
            
            {/* Moons */}
            {planet.moons.map((moon, moonIndex) => (
              <div
                key={`moon-${index}-${moonIndex}`}
                className="absolute animate-orbit"
                style={{
                  width: `${moon.orbitRadius * 2}px`,
                  height: `${moon.orbitRadius * 2}px`,
                  borderRadius: '50%',
                  top: `${planet.size / 2 - moon.orbitRadius}px`,
                  left: `${planet.size / 2 - moon.orbitRadius}px`,
                  animationDuration: `${moon.orbitSpeed}s`,
                  animationDelay: `${-moon.orbitSpeed * (moon.rotationAngle / 360)}s`
                }}
              >
                <div
                  className="absolute rounded-full"
                  style={{
                    width: `${moon.size}px`,
                    height: `${moon.size}px`,
                    background: moon.color,
                    top: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    boxShadow: `0 0 10px rgba(255, 255, 255, 0.3)`
                  }}
                />
              </div>
            ))}
          </div>
        ))}
        
        {/* Add some shooting stars */}
        <div className="absolute w-[2px] h-[80px] bg-gradient-to-b from-transparent via-white to-transparent opacity-0 animate-shooting-star" style={{ top: '20%', left: '70%', animationDelay: '3s' }}></div>
        <div className="absolute w-[2px] h-[60px] bg-gradient-to-b from-transparent via-white to-transparent opacity-0 animate-shooting-star" style={{ top: '40%', left: '30%', animationDelay: '7s' }}></div>
        <div className="absolute w-[2px] h-[70px] bg-gradient-to-b from-transparent via-white to-transparent opacity-0 animate-shooting-star" style={{ top: '70%', left: '60%', animationDelay: '12s' }}></div>
        <div className="absolute w-[2px] h-[90px] bg-gradient-to-b from-transparent via-white to-transparent opacity-0 animate-shooting-star" style={{ top: '15%', left: '40%', animationDelay: '16s' }}></div>
        <div className="absolute w-[2px] h-[65px] bg-gradient-to-b from-transparent via-white to-transparent opacity-0 animate-shooting-star" style={{ top: '60%', left: '20%', animationDelay: '22s' }}></div>
        
        {/* Space dust */}
        <div className="absolute w-full h-full pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjA1IiBudW1PY3RhdmVzPSIyIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIj48L2ZlVHVyYnVsZW5jZT48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIj48L2ZlQ29sb3JNYXRyaXg+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ij48L3JlY3Q+PC9zdmc+')] opacity-20"></div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
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
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-twinkle {
          animation: twinkle var(--animation-duration, 3s) ease-in-out infinite;
          animation-delay: var(--animation-delay, 0s);
        }
        
        .animate-float-slow {
          animation: floatParticle 15s infinite ease-in-out;
          animation-delay: var(--animation-delay, 0s);
        }
        
        .animate-shooting-star {
          animation: shootingStar 5s infinite ease-in-out;
          animation-delay: var(--animation-delay, 0s);
        }
        
        .animate-rotate-slow {
          animation: rotate var(--animation-duration, 200s) linear infinite;
        }
        
        .animate-orbit {
          animation: orbit var(--animation-duration, 10s) linear infinite;
          animation-delay: var(--animation-delay, 0s);
        }
      `}} />
    </div>
  );
};

export default EnhancedSpaceBackground;


import React from 'react';

interface SectionHeadingProps {
  text: string;
  accentText: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text, accentText }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
      <span className="text-white">{text} </span>
      <span className="text-neon-blue animate-glow">{accentText}</span>
    </h2>
  );
};

export default SectionHeading;

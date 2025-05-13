
import React from 'react';
import { Award } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface CertificateCardProps {
  image: string;
  title: string;
  issuer: string;
  date: string;
  altText: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ image, title, issuer, date, altText }) => {
  return (
    <div className="galaxy-card hover:border-neon-pink transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,255,0.3)]">
      <AspectRatio ratio={16/9} className="bg-[#0a0a20] rounded-lg mb-4 overflow-hidden">
        <img 
          src={image} 
          alt={altText} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-[#0a0a20]/80 p-1 rounded-full">
          <Award className="h-4 w-4 text-neon-pink" />
        </div>
      </AspectRatio>
      
      <h3 className="text-xl font-bold text-white mb-1 line-clamp-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-2">{issuer}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs text-neon-blue">{date}</span>
        <button 
          className="text-neon-pink hover:text-neon-blue transition-colors duration-300 text-sm"
          onClick={() => window.open(image, '_blank')}
        >
          View Certificate
        </button>
      </div>
    </div>
  );
};

export default CertificateCard;

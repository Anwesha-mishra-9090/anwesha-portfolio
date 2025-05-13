
import React from 'react';
import SectionHeading from '../SectionHeading';
import CertificateCard from './CertificateCard';
import { certificatesData } from '../../data/certificates';

const CertificatesSection: React.FC = () => {
  return (
    <section id="certificates" className="py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading text="My" accentText="Certificates" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map(certificate => (
            <CertificateCard 
              key={certificate.id} 
              image={certificate.image} 
              title={certificate.title} 
              issuer={certificate.issuer} 
              date={certificate.date} 
              altText={certificate.altText} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;


import React from 'react';
import SimpleSpaceBackground from '../components/SimpleSpaceBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ContactForm } from '../components/contact/ContactForm';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <SimpleSpaceBackground />
      <Navbar />
      
      <main className="pt-24 min-h-screen px-4 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <ContactForm />
            </div>
            
            <div className="w-full lg:w-1/3">
              <div className="bg-[#0F111A] rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Find Me On</h2>
                
                <Alert className="bg-[#161926] border-[#2E3350] mb-4">
                  <Mail className="h-5 w-5 text-[#8B5CF6]" />
                  <AlertDescription className="text-white ml-2">
                    Email: <a href="mailto:example@example.com" className="text-[#8B5CF6] hover:underline">example@example.com</a>
                  </AlertDescription>
                </Alert>
                
                <Alert className="bg-[#161926] border-[#2E3350] mb-4">
                  <Mail className="h-5 w-5 text-[#8B5CF6]" />
                  <AlertDescription className="text-white ml-2">
                    LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:underline">linkedin.com</a>
                  </AlertDescription>
                </Alert>
                
                <Alert className="bg-[#161926] border-[#2E3350] mb-4">
                  <Mail className="h-5 w-5 text-[#8B5CF6]" />
                  <AlertDescription className="text-white ml-2">
                    GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#8B5CF6] hover:underline">github.com</a>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;

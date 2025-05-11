
import React, { useState } from 'react';
import SimpleSpaceBackground from '../components/SimpleSpaceBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, Github, Linkedin, Send, AlertCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import SectionHeading from '../components/SectionHeading';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Define the form schema with zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  
  // Initialize react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setFormError(null);
    
    try {
      // EmailJS parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
      };
      
      // Send email using EmailJS
      await emailjs.send(
        'service_qeb5r4o', // Service ID
        'template_7lu6z8i', // Template ID
        templateParams,
        'vpZw2HATEC4wjDUBb' // Public Key
      );
      
      // Show success message
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! I'll get back to you soon.",
      });
      
      // Reset form
      form.reset();
      
    } catch (error) {
      console.error("Email sending failed:", error);
      setFormError("Failed to send your message. Please try again later.");
      
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <SimpleSpaceBackground />
      <Navbar />
      
      <main className="pt-24 min-h-screen px-4 mb-24">
        <div className="max-w-6xl mx-auto">
          <SectionHeading text="Get in" accentText="Touch" />
          
          <p className="text-xl text-center text-gray-300 mb-12">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="galaxy-card">
              <h2 className="text-2xl font-bold mb-6 text-neon-blue">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a103d] border border-neon-blue">
                    <Mail className="w-5 h-5 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <a href="mailto:mishra.anwesha143@gmail.com" className="text-gray-300 hover:text-neon-blue transition-colors">
                      mishra.anwesha143@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a103d] border border-neon-pink">
                    <Phone className="w-5 h-5 text-neon-pink" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <a href="tel:9827623522" className="text-gray-300 hover:text-neon-pink transition-colors">
                      9827623522
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a103d] border border-neon-purple">
                    <Github className="w-5 h-5 text-neon-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">GitHub</h3>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-purple transition-colors">
                      github.com/anweshamishragithub
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a103d] border border-neon-blue">
                    <Linkedin className="w-5 h-5 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">LinkedIn</h3>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-blue transition-colors">
                      linkedin.com/in/anweshamishralinkedin
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-3">Other Links</h3>
                <div className="flex flex-wrap gap-3">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="neon-button">
                    LeetCode
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="neon-button-pink">
                    HackerRank
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="neon-button-purple">
                    GeeksforGeeks
                  </a>
                </div>
              </div>
            </div>
            
            <div className="galaxy-card">
              <h2 className="text-2xl font-bold mb-6 text-neon-pink">Send a Message</h2>
              
              {formError && (
                <Alert className="mb-6 border-red-500 bg-red-500/20">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{formError}</AlertDescription>
                </Alert>
              )}
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="p-3 bg-[#1a103d] border border-[#8c52ff]/30 rounded-md focus:ring-2 focus:ring-neon-pink focus:border-transparent text-white" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email" 
                            type="email" 
                            className="p-3 bg-[#1a103d] border border-[#8c52ff]/30 rounded-md focus:ring-2 focus:ring-neon-pink focus:border-transparent text-white" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Message subject" 
                            className="p-3 bg-[#1a103d] border border-[#8c52ff]/30 rounded-md focus:ring-2 focus:ring-neon-pink focus:border-transparent text-white" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            rows={5} 
                            className="p-3 bg-[#1a103d] border border-[#8c52ff]/30 rounded-md focus:ring-2 focus:ring-neon-pink focus:border-transparent text-white resize-none" 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full neon-button-pink flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;

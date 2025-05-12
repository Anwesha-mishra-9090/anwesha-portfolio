
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useToast } from "@/hooks/use-toast";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem,
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { contactFormSchema, type ContactFormValues } from '@/models/contactForm';

export const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize react-hook-form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });
  
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
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
    <div className="bg-[#0F111A] rounded-lg p-8 shadow-lg">
      <h1 className="text-3xl font-bold text-white mb-8">Send me a message</h1>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-white text-lg">Name</label>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        placeholder="Your name" 
                        className="bg-[#161926] border-[#2E3350] text-white h-12 text-base" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-white text-lg">Email</label>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        placeholder="your.email@example.com" 
                        type="email" 
                        className="bg-[#161926] border-[#2E3350] text-white h-12 text-base" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-white text-lg">Subject</label>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      placeholder="Message subject" 
                      className="bg-[#161926] border-[#2E3350] text-white h-12 text-base" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-white text-lg">Message</label>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea 
                      placeholder="Your message here..." 
                      rows={7} 
                      className="bg-[#161926] border-[#2E3350] text-white resize-none text-base py-3" 
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <button
            type="submit"
            className="w-full h-14 text-white font-medium text-lg rounded-md bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            <Send className="h-5 w-5" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;

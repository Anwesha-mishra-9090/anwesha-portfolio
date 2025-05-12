
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { contactFormSchema, type ContactFormValues } from '@/models/contactForm';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  
  // Initialize react-hook-form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
  });
  
  const onSubmit = async (data: ContactFormValues) => {
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
    <div className="bg-[#121212] rounded-lg p-6">
      {formError && (
        <Alert className="mb-6 border-red-500 bg-red-500/20">
          <AlertDescription>{formError}</AlertDescription>
        </Alert>
      )}
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your name" 
                      className="bg-[#1e1e1e] border-[#333] text-white" 
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
                      className="bg-[#1e1e1e] border-[#333] text-white" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Subject</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Message subject" 
                    className="bg-[#1e1e1e] border-[#333] text-white" 
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
                    className="bg-[#1e1e1e] border-[#333] text-white resize-none" 
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            className="w-full bg-[#00e1ff] hover:bg-[#00b8cc] text-black font-medium py-3 rounded-md flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;

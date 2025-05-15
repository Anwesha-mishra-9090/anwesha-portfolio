
import { toast } from '@/hooks/use-toast';

type ToastProps = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: 'default' | 'destructive' | 'success' | 'error' | 'warning' | string;
  [key: string]: any;
}

declare module '@/hooks/use-toast' {
  interface ToastAPI {
    toast: (props: ToastProps) => void;
    dismiss: (id?: string | number) => string | number;
    error: (title: string, description?: string) => void;
    success: (title: string, description?: string) => void;
    toasts: any[];
  }
  
  export function useToast(): ToastAPI;
}


import * as React from "react";
import { toast as sonnerToast, Toaster as SonnerToaster } from "sonner";

// Define a type for the toast function and related utilities
type Toast = {
  toast: (props: {
    title?: string;
    description?: string;
    action?: React.ReactNode;
    variant?: string;
    [key: string]: any;
  }) => string | number;
  dismiss: (id?: string | number) => void;
  error: (title: string, description?: string) => void;
  success: (title: string, description?: string) => void;
  toasts: any[]; // Required by the Toaster component, even if empty
};

const Toaster = ({ className, ...props }: React.ComponentProps<typeof SonnerToaster>) => {
  return (
    <SonnerToaster
      className={className}
      toastOptions={{
        classNames: {
          toast:
            "group toast group flex w-full items-center border border-[#8c52ff]/20 bg-[#0a0a30] p-4 pr-6 shadow-lg shadow-[0_5px_15px_rgba(140,82,255,0.1)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-right-full data-[state=open]:animate-in data-[state=open]:slide-in-from-top-full",
          title: "text-sm font-semibold text-white",
          description: "text-xs text-gray-300",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

// Create the toast function with appropriate typing
function toast({
  title,
  description,
  action,
  variant = "default",
  ...props
}: {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: string;
  [key: string]: any;
}) {
  try {
    // Use the variant directly as a method on sonnerToast if it exists
    if (variant === "error" && typeof sonnerToast.error === 'function') {
      return sonnerToast.error(title || "", {
        description,
        action,
        ...props,
      });
    } 
    else if (variant === "success" && typeof sonnerToast.success === 'function') {
      return sonnerToast.success(title || "", {
        description,
        action,
        ...props,
      });
    }
    else {
      // Default toast
      return sonnerToast(title || "", {
        description,
        action,
        ...props,
      });
    }
  } catch (error) {
    console.error("Toast error:", error);
    // Last resort fallback
    return sonnerToast(title || "Notification", {
      description: description || "Something happened",
      ...props,
    });
  }
}

// Define the useToast hook
const useToast = (): Toast => {
  return {
    toast,
    dismiss: sonnerToast.dismiss,
    error: (title: string, description?: string) => {
      toast({ title, description, variant: "error" });
    },
    success: (title: string, description?: string) => {
      toast({ title, description, variant: "success" });
    },
    toasts: [], // Empty array to satisfy the toaster component
  };
};

export { Toaster, toast, useToast };

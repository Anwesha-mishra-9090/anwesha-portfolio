
import * as React from "react";
import { toast as sonnerToast, Toaster as Sonner } from "sonner";

import { cn } from "@/lib/utils";

type ToastProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ className, ...props }: ToastProps) => {
  return (
    <Sonner
      className={cn(className)}
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

// Toast function with theme-consistent styling
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
    if (typeof sonnerToast[variant] === 'function') {
      return sonnerToast[variant]({
        title,
        description,
        action,
        ...props,
      });
    } else {
      // Fallback to default toast if variant doesn't exist
      return sonnerToast({
        title,
        description,
        action,
        ...props,
      });
    }
  } catch (error) {
    console.error("Toast error:", error);
    // Last resort fallback
    return sonnerToast({
      title,
      description,
      action,
      ...props,
    });
  }
}

// Define useToast hook
const useToast = () => {
  return {
    toast,
    dismiss: sonnerToast.dismiss,
    error: (title: string, description?: string) => {
      toast({ title, description, variant: "error" });
    },
    success: (title: string, description?: string) => {
      toast({ title, description, variant: "success" });
    },
    // Empty array to satisfy the toaster component
    toasts: [],
  };
};

export { Toaster, toast, useToast };

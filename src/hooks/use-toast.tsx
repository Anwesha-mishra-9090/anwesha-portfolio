
// This file implements the toast functionality following the shadcn/ui pattern
// but placed in the hooks directory as per latest shadcn standards

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

// Toast function with theme-consistent styling for portfolio
function toast({
  title,
  description,
  action,
  ...props
}: {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  [key: string]: any;
}) {
  return sonnerToast[props.variant || "default"]({
    title,
    description,
    action,
    ...props,
  });
}

// Define the useToast hook ONCE
const useToast = () => {
  return {
    toast,
    dismiss: sonnerToast.dismiss,
    error: (title: string, description?: string) => {
      toast({ title, description, variant: "destructive" });
    },
    success: (title: string, description?: string) => {
      toast({ title, description });
    },
    // Add a toasts property as an empty array to satisfy the toaster component
    toasts: [],
  };
};

export { Toaster, toast, useToast };

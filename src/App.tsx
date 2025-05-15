
import React from 'react';
import { Toaster } from "@/hooks/use-toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePage from "./pages/SinglePage";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<SinglePage />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

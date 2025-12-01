import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import DarkVeil from "@/components/DarkVeil";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>

      {/* ---------- GLOBAL DARK VEIL BACKGROUND ---------- */}
      <div className="fixed inset-0 -z-10">
        <DarkVeil />
      </div>

      {/* Toast Notifications */}
      <Toaster />
      <Sonner />

      {/* ---------- MAIN APP ROUTING ---------- */}
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

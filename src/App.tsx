import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pulse from "./pages/Pulse";
import DataLab from "./pages/DataLab";
import Simulate from "./pages/Simulate";
import CivicBlueprint from "./pages/CivicBlueprint";
import Engage from "./pages/Engage";
import Atlas from "./pages/Atlas";
import Impact from "./pages/Impact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pulse" element={<Pulse />} />
          <Route path="/datalab" element={<DataLab />} />
          <Route path="/simulate" element={<Simulate />} />
          <Route path="/blueprint" element={<CivicBlueprint />} />
          <Route path="/engage" element={<Engage />} />
          <Route path="/atlas" element={<Atlas />} />
          <Route path="/impact" element={<Impact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

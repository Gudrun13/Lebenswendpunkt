import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Newsletter from "@/pages/Newsletter";
import Privacy from "@/pages/Privacy";
import Imprint from "@/pages/Imprint";
import Terms from "@/pages/Terms";
import Revocation from "@/pages/Revocation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/newsletter" component={Newsletter} />
      <Route path="/datenschutz" component={Privacy} />
      <Route path="/impressum" component={Imprint} />
      <Route path="/agb" component={Terms} />
      <Route path="/widerruf" component={Revocation} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

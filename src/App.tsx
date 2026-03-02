import { Route, Switch, Router } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Dashboard } from "@/pages/Dashboard";
import { Projects } from "@/pages/Projects";
import { Analytics } from "@/pages/Analytics";
import { Knowledge } from "@/pages/Knowledge";
import { Team } from "@/pages/Team";

function AppContent() {
  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Switch>
            <Route path="/" component={Dashboard} />
            <Route path="/projects" component={Projects} />
            <Route path="/analytics" component={Analytics} />
            <Route path="/knowledge" component={Knowledge} />
            <Route path="/team" component={Team} />
            <Route>
              <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-4xl font-bold mb-2">404</h1>
                <p className="text-muted-foreground">頁面不存在</p>
              </div>
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
}

function App() {
  // Detect base path from Vite's import.meta.env.BASE_URL
  const base = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

  return (
    <Router base={base}>
      <AppContent />
    </Router>
  );
}

export default App;

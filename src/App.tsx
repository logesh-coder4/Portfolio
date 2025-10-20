import {TooltipProvider} from "./components/ui/tooltip";
import { Toaster as Sonner } from "./components/ui/sonner";
import { Toaster } from "./components/ui/toaster";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div>
        <TooltipProvider>
            <Toaster/>
            <Sonner/>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                    <Home />
                    <About/>
                    <Skills />
                    <Projects />
                    <Contact/>
                    {/* <NotFound /> */}
                </main>
                <Footer />
            </div>
        </TooltipProvider>
    </div>
  )
}

export default App
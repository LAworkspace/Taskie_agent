import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-morphism">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-violet)] rounded-lg flex items-center justify-center">
              <Bot className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-bold">Taskie</span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="hover:text-[var(--electric-blue)] transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('integrations')}
              className="hover:text-[var(--electric-blue)] transition-colors"
            >
              Integrations
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="hover:text-[var(--electric-blue)] transition-colors"
            >
              Pricing
            </button>
            <Button className="bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-violet)] hover:shadow-lg hover:shadow-[var(--electric-blue)]/25 transition-all">
              Get Started
            </Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left hover:text-[var(--electric-blue)] transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('integrations')}
              className="block w-full text-left hover:text-[var(--electric-blue)] transition-colors"
            >
              Integrations
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left hover:text-[var(--electric-blue)] transition-colors"
            >
              Pricing
            </button>
            <Button className="w-full bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-violet)]">
              Get Started
            </Button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

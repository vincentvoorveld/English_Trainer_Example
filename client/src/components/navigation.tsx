import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
              SM
            </div>
            <span className="ml-3 text-xl font-semibold text-gray-900">Sarah Mitchell</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('benefits')} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Why Business English
            </button>
            <button 
              onClick={() => scrollToSection('training')} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Training
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-gray-600 hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-600 hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('benefits')} 
                className="text-gray-600 hover:text-primary transition-colors text-left"
              >
                Why Business English
              </button>
              <button 
                onClick={() => scrollToSection('training')} 
                className="text-gray-600 hover:text-primary transition-colors text-left"
              >
                Training
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-gray-600 hover:text-primary transition-colors text-left"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-600 hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

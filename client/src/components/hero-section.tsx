import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBenefits = () => {
    const element = document.getElementById('benefits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="gradient-hero py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Master Business English for{" "}
              <span className="text-primary">Global Success</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Elevate your professional communication with personalized Business English coaching. 
              Build confidence, expand opportunities, and accelerate your career growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="gradient-primary hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg"
              >
                Book Free Consultation
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToBenefits}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional business coaching session" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="text-white h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">500+ Professionals Trained</p>
                  <p className="text-sm text-gray-600">Across 50+ Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

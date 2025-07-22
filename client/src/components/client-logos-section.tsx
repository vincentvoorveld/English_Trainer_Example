import { Building, Factory, BarChart3, Laptop, Settings, Globe } from "lucide-react";

export default function ClientLogosSection() {
  const logos = [
    { icon: Building, name: "Corporate" },
    { icon: Factory, name: "Manufacturing" },
    { icon: BarChart3, name: "Finance" },
    { icon: Laptop, name: "Technology" },
    { icon: Settings, name: "Engineering" },
    { icon: Globe, name: "Global" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Companies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Organizations worldwide choose our Business English coaching to empower their teams and drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
          {logos.map((logo, index) => (
            <div key={index} className="w-24 h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
              <logo.icon className="text-gray-400 h-8 w-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

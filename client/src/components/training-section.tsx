import { ClipboardList, Route, Rocket, Check } from "lucide-react";

export default function TrainingSection() {
  const focusAreas = [
    {
      title: "Presentation Skills",
      description: "Compelling presentations, public speaking confidence"
    },
    {
      title: "Meeting Management",
      description: "Leading meetings, active participation, decision-making"
    },
    {
      title: "Negotiation & Sales",
      description: "Persuasive communication, deal closing, relationship building"
    }
  ];

  return (
    <section id="training" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Training Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personalized, practical, and results-driven Business English coaching tailored to your specific needs and schedule.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=500" 
              alt="Corporate training session" 
              className="rounded-2xl shadow-xl w-full h-auto" 
            />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Learning Options</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Choose from individual coaching, small group sessions, or corporate team training. 
                All programs are available both online and in-person to fit your schedule and preferences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Individual Coaching</h4>
                <p className="text-gray-600 text-sm mb-3">1-on-1 personalized sessions</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Customized curriculum</li>
                  <li>• Flexible scheduling</li>
                  <li>• Rapid progress</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Group Training</h4>
                <p className="text-gray-600 text-sm mb-3">Small groups 3-6 participants</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Peer interaction</li>
                  <li>• Cost-effective</li>
                  <li>• Team building</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <ClipboardList className="text-white h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Assessment</h3>
            <p className="text-gray-600">
              Comprehensive evaluation of your current English level and specific business communication needs.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Route className="text-white h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Custom Plan</h3>
            <p className="text-gray-600">
              Tailored learning path focusing on your industry, role, and professional communication goals.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="text-white h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Results</h3>
            <p className="text-gray-600">
              Measurable improvement in confidence, fluency, and professional communication effectiveness.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Focus Areas</h3>
              <div className="space-y-4">
                {focusAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="text-white h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{area.title}</h4>
                      <p className="text-gray-600 text-sm">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Duration</h3>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-xl p-6 bg-white">
                  <h4 className="font-semibold text-gray-900 mb-2">Intensive Program</h4>
                  <p className="text-gray-600 mb-3">8-12 weeks | 2 sessions per week</p>
                  <p className="text-sm text-gray-600">Perfect for urgent improvement needs or specific events</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-6 bg-white">
                  <h4 className="font-semibold text-gray-900 mb-2">Standard Program</h4>
                  <p className="text-gray-600 mb-3">16-20 weeks | 1 session per week</p>
                  <p className="text-sm text-gray-600">Comprehensive skill development with sustainable progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

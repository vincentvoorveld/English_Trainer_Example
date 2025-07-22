import { TrendingUp, Handshake, Users, Globe, MessageSquare, Award } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description: "Master professional communication to unlock leadership opportunities and accelerate your career growth in global organizations."
    },
    {
      icon: Handshake,
      title: "Client Relations",
      description: "Build stronger relationships with international clients and partners through clear, confident business communication."
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Lead diverse teams effectively with enhanced presentation skills and cross-cultural communication abilities."
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Expand your professional network and access international markets with confident English communication."
    },
    {
      icon: MessageSquare,
      title: "Meeting Confidence",
      description: "Participate actively in meetings, negotiations, and presentations with improved fluency and professional vocabulary."
    },
    {
      icon: Award,
      title: "Professional Credibility",
      description: "Enhance your professional image with polished communication skills that command respect and trust."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Business English Matters</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In today's global marketplace, effective business communication is your competitive advantage. 
            Here's how Business English coaching transforms your professional presence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <benefit.icon className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Communication?</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Join hundreds of professionals who have elevated their careers through targeted Business English coaching. 
                The investment in your communication skills pays dividends throughout your entire career.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                </div>
                <p className="text-sm text-gray-600">500+ professionals transformed</p>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Diverse business meeting" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

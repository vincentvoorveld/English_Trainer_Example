import { GraduationCap, Briefcase, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Your Coach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 15 years of experience in business communication and language training, 
            I help professionals unlock their potential through effective English communication.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600" 
              alt="Sarah Mitchell - Business English Coach" 
              className="rounded-2xl shadow-xl w-full h-auto" 
            />
            <div className="absolute top-6 right-6 bg-white p-3 rounded-full shadow-lg">
              <Award className="text-yellow-500 h-6 w-6" />
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sarah Mitchell</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I'm a certified Business English specialist with a passion for helping professionals 
                communicate with confidence and clarity. My background in corporate training and 
                international business gives me unique insights into the communication challenges 
                faced by today's global workforce.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're preparing for presentations, negotiations, or daily business interactions, 
                I'll help you develop the skills and confidence to succeed in any professional environment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="text-white h-6 w-6" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                <p className="text-gray-600 text-sm">MA in Applied Linguistics<br />TESOL Certification</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="text-white h-6 w-6" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-600 text-sm">15+ Years Training<br />Fortune 500 Companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Sarah's coaching transformed my confidence in client presentations. Within 3 months, I was leading international calls and negotiations with ease. The ROI on this investment is incredible.",
      name: "Michael Chen",
      role: "VP Sales, TechGlobal Inc"
    },
    {
      text: "The business writing module was a game-changer. My emails are now clear, professional, and get results. Sarah's feedback helped me communicate my ideas much more effectively.",
      name: "Elena Rodriguez",
      role: "Marketing Director, InnovateCorp"
    },
    {
      text: "Working with Sarah prepared me perfectly for my promotion interview. Her presentation coaching gave me the confidence to showcase my ideas clearly and professionally.",
      name: "David Kumar",
      role: "Senior Manager, FinanceFirst"
    },
    {
      text: "The group training sessions for our team were excellent. Everyone improved their meeting participation and our communication became much more efficient and professional.",
      name: "Lisa Thompson",
      role: "HR Director, GlobalSolutions"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from professionals who transformed their careers through our Business English coaching programs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 inline-block shadow-lg">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-gray-600">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">75%</p>
                <p className="text-sm text-gray-600">Career Advancement</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-gray-600">Companies Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

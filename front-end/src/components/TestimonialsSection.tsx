import React from 'react';
import { Star, Quote, MessageSquare, Coffee, Pizza, Utensils, Cake } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "João Silva",
      restaurant: "Burger House",
      text: "Triplicamos nossos pedidos online desde que começamos a usar a plataforma. Simplesmente fantástico!",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      result: "+300% vendas"
    },
    {
      name: "Maria Santos",
      restaurant: "Pizzaria Bella",
      text: "A integração com WhatsApp mudou nossa operação. Agora tudo é mais organizado e eficiente.",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      result: "+250% eficiência"
    },
    {
      name: "Carlos Oliveira",
      restaurant: "Sushi Zen",
      text: "O melhor investimento que fizemos. Nossos clientes adoram o cardápio digital!",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      result: "+400% satisfação"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Clean Background with Subtle Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f1f5f9%22 fill-opacity=%220.5%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-slate-200/20 to-slate-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-r from-slate-200/20 to-slate-300/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Floating Food Icons */}
      <div className="absolute top-24 left-24 text-slate-300/40 animate-coffee-steam">
        <Coffee className="w-8 h-8" />
      </div>
      <div className="absolute bottom-24 right-24 text-slate-300/30 animate-plate-spin">
        <Pizza className="w-9 h-9" />
      </div>
      <div className="absolute top-1/2 left-12 text-slate-300/50 animate-sizzle">
        <Utensils className="w-6 h-6" />
      </div>
      <div className="absolute top-1/3 right-12 text-slate-300/40 animate-chef-bounce">
        <Cake className="w-7 h-7" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            Depoimentos
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 animate-fade-in-up">
            <span className="text-slate-900">
              Nossos clientes
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              adoram os resultados
            </span>
          </h2>
        </div>

        {/* Masonry-style Layout */}
        <div className="relative">
          {/* Central Large Testimonial */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-orange-300/30 rounded-full blur-2xl"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <img 
                  src={testimonials[0].image} 
                  alt={testimonials[0].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-orange-200 shadow-lg"
                />
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    {[...Array(testimonials[0].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-orange-500 fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="w-12 h-12 text-orange-500 mb-4 mx-auto md:mx-0" />
                  
                  <p className="text-xl md:text-2xl text-slate-700 italic leading-relaxed mb-6 font-medium">
                    "{testimonials[0].text}"
                  </p>
                  
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div>
                      <p className="font-bold text-slate-900 text-lg">{testimonials[0].name}</p>
                      <p className="text-orange-600 font-semibold">{testimonials[0].restaurant}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                      {testimonials[0].result}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden group hover:bg-white/95 transition-all duration-300"
                style={{ animationDelay: `${(index + 1) * 0.2}s` }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-orange-300/20 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-orange-200"
                    />
                    <div>
                      <p className="font-bold text-slate-900">{testimonial.name}</p>
                      <p className="text-orange-600 text-sm font-semibold">{testimonial.restaurant}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-orange-500 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 italic leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 py-1 rounded-full font-bold text-xs inline-block">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
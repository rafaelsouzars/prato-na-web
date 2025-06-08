import React from 'react';
import { Smartphone, MessageCircle, ShoppingCart, CreditCard, Globe, Palette, ArrowRight, CheckCircle, Utensils, Coffee, Pizza, Cake } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Cardápio Digital",
      description: "Crie cardápios digitais interativos e responsivos que funcionam em qualquer dispositivo",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Integração WhatsApp",
      description: "Receba pedidos diretamente no seu WhatsApp de forma automática e organizada",
      gradient: "from-emerald-600 to-green-600"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Gestão de Pedidos",
      description: "Sistema completo para gerenciar todos os seus pedidos em tempo real",
      gradient: "from-violet-600 to-purple-600"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Pagamentos Online",
      description: "Configure pagamentos automáticos direto na sua conta, sem taxas extras",
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Domínio Personalizado",
      description: "Use seu próprio domínio para dar mais credibilidade ao seu negócio",
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Personalização Total",
      description: "Customize cores, logos e layout para combinar com sua marca",
      gradient: "from-pink-600 to-rose-600"
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Clean White Background with Subtle Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-100/20 to-orange-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-50/30 to-orange-100/30 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Floating Food Icons */}
      <div className="absolute top-20 right-20 text-orange-200/25 animate-plate-spin">
        <Pizza className="w-10 h-10" />
      </div>
      <div className="absolute bottom-20 left-20 text-orange-300/20 animate-steam">
        <Coffee className="w-8 h-8" />
      </div>
      <div className="absolute top-1/3 left-16 text-orange-200/30 animate-sizzle">
        <Utensils className="w-6 h-6" />
      </div>
      <div className="absolute bottom-1/3 right-16 text-orange-300/25 animate-chef-bounce">
        <Cake className="w-7 h-7" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Smartphone className="w-4 h-4" />
            Funcionalidades
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 animate-fade-in-up">
            <span className="text-slate-900">
              Tudo que você precisa
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              em uma única plataforma
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto px-4 animate-fade-in-up-delayed font-medium leading-relaxed">
            Ferramentas profissionais para transformar seu restaurante em uma máquina de vendas digital
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Feature Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              
              {/* Feature Content */}
              <h3 className="text-xl font-bold mb-4 text-slate-900 relative z-10 group-hover:text-orange-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed relative z-10 mb-4">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 relative z-10">
                <span className="text-sm">Saiba mais</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-20">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 md:p-12 rounded-3xl border border-orange-200 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Pronto para começar?
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Configure seu cardápio digital em menos de 5 minutos
            </p>
            <button className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto">
              <span>Começar Agora</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
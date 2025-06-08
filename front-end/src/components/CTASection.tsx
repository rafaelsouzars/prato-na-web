import React from 'react';
import { ArrowRight, Rocket, TrendingUp, Clock, DollarSign, Zap, Shield, Coffee, Pizza, Utensils, Cake } from 'lucide-react';

const CTASection = () => {
  const ctaStats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "300%",
      label: "Aumento médio em vendas",
      gradient: "from-emerald-500 to-green-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "5 min",
      label: "Para configurar tudo",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      number: "R$ 50",
      label: "Por mês, tudo incluso",
      gradient: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      {/* Repositioned gradient orbs - moved away from bottom edge */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-gradient-to-r from-orange-600/10 to-orange-700/10 rounded-full blur-3xl animate-float-delayed"></div>
      
      {/* Floating Food Icons */}
      <div className="absolute top-24 left-24 text-white/10 animate-coffee-steam">
        <Coffee className="w-8 h-8" />
      </div>
      <div className="absolute bottom-24 right-24 text-white/8 animate-plate-spin">
        <Pizza className="w-9 h-9" />
      </div>
      <div className="absolute top-1/2 left-12 text-white/12 animate-sizzle">
        <Utensils className="w-6 h-6" />
      </div>
      <div className="absolute top-1/3 right-12 text-white/10 animate-chef-bounce">
        <Cake className="w-7 h-7" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          <span className="text-white">
            Pronto para revolucionar
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
            seu restaurante?
          </span>
        </h2>
        
        <p className="text-xl sm:text-2xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
          Junte-se a centenas de restaurantes que já transformaram suas vendas com tecnologia profissional
        </p>

        {/* CTA Stats */}
        <div className="bg-white/5 backdrop-blur-lg p-12 rounded-3xl border border-white/10 max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {ctaStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-3">{stat.number}</div>
                <div className="text-slate-300 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <button className="group bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white px-16 py-6 rounded-2xl text-2xl font-bold hover:from-orange-700 hover:via-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-4 mx-auto border border-orange-400/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              <span className="relative z-10 text-center">Começar Teste Grátis Agora</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
            </button>
            
            <p className="text-slate-300 text-lg font-medium">
              7 dias grátis • Sem compromisso • Cancelamento a qualquer momento • Suporte 24/7
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-slate-300">
            <Zap className="w-6 h-6 text-orange-400" />
            <span className="font-semibold">Setup Instantâneo</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-slate-300">
            <TrendingUp className="w-6 h-6 text-orange-400" />
            <span className="font-semibold">Resultados Garantidos</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-slate-300">
            <Shield className="w-6 h-6 text-orange-400" />
            <span className="font-semibold">Suporte 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
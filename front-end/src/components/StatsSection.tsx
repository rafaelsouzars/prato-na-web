import React from 'react';
import { Utensils, TrendingUp, ShoppingCart, Heart, Zap, Shield, Rocket } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { 
      number: "500+", 
      label: "Restaurantes Ativos", 
      icon: <Utensils className="w-6 h-6" />,
      color: "from-slate-600 to-slate-700"
    },
    { 
      number: "300%", 
      label: "Aumento Médio em Vendas", 
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-emerald-600 to-emerald-700"
    },
    { 
      number: "50k+", 
      label: "Pedidos Processados", 
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700"
    },
    { 
      number: "98%", 
      label: "Satisfação dos Clientes", 
      icon: <Heart className="w-6 h-6" />,
      color: "from-rose-600 to-rose-700"
    }
  ];

  const highlights = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Setup em 5 minutos",
      description: "Configure seu cardápio digital em poucos cliques",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zero Taxas",
      description: "Pagamentos direto na sua conta, sem taxas extras",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Crescimento Garantido",
      description: "Aumente suas vendas em até 300%",
      gradient: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <div className="w-full">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto mb-16">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="group relative bg-white/90 backdrop-blur-xl p-6 lg:p-8 rounded-2xl border border-slate-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <div className="text-center relative z-10">
              <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 lg:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-slate-900">{stat.number}</h3>
              <p className="text-slate-600 font-medium text-sm lg:text-base leading-tight">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {highlights.map((highlight, index) => (
          <div 
            key={index}
            className="group relative bg-white/90 backdrop-blur-xl p-6 lg:p-8 rounded-2xl border border-slate-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl text-center hover:-translate-y-1"
            style={{ animationDelay: `${(index + 4) * 0.1}s` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <div className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${highlight.gradient} rounded-2xl flex items-center justify-center mb-4 lg:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
              <div className="text-white">
                {highlight.icon}
              </div>
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-3 text-slate-900 relative z-10">{highlight.title}</h3>
            <p className="text-slate-600 text-sm lg:text-base leading-relaxed relative z-10">{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
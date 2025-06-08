import React from 'react';
import { Clock, BarChart3, Target, Award, TrendingUp, Users, Zap, Shield, Utensils, Coffee, Pizza, Sandwich } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Economia de Tempo",
      description: "Automatize pedidos e reduza tempo de atendimento",
      metric: "70%",
      metricLabel: "Redução no tempo",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Relatórios Detalhados",
      description: "Acompanhe vendas e performance em tempo real",
      metric: "24/7",
      metricLabel: "Monitoramento",
      gradient: "from-emerald-600 to-green-600"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Marketing Integrado",
      description: "Ferramentas de promoção e fidelização incluídas",
      metric: "100%",
      metricLabel: "Automação",
      gradient: "from-violet-600 to-purple-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Suporte Premium",
      description: "Atendimento especializado para seu sucesso",
      metric: "24/7",
      metricLabel: "Suporte ativo",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "300%",
      label: "Aumento médio em vendas",
      color: "text-emerald-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Restaurantes ativos",
      color: "text-blue-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      number: "5 min",
      label: "Para configurar tudo",
      color: "text-orange-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: "99.9%",
      label: "Uptime garantido",
      color: "text-violet-600"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-orange-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-gradient-to-r from-orange-100/30 to-orange-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-r from-slate-100/30 to-slate-200/30 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Floating Food Icons */}
      <div className="absolute top-24 left-24 text-orange-200/30 animate-coffee-steam">
        <Coffee className="w-8 h-8" />
      </div>
      <div className="absolute bottom-24 right-24 text-slate-300/25 animate-plate-spin">
        <Pizza className="w-9 h-9" />
      </div>
      <div className="absolute top-1/2 left-12 text-orange-300/20 animate-sizzle">
        <Utensils className="w-6 h-6" />
      </div>
      <div className="absolute top-1/3 right-12 text-slate-200/30 animate-chef-bounce">
        <Sandwich className="w-7 h-7" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            Benefícios
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Benefícios exclusivos
            </span>
            <br />
            <span className="text-slate-900">
              para seu negócio
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Veja como nossa plataforma pode transformar a operação do seu restaurante
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {benefit.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-orange-600 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {benefit.description}
              </p>
              
              {/* Metric */}
              <div className="flex items-center gap-2">
                <span className={`text-xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                  {benefit.metric}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {benefit.metricLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Resultados comprovados
            </h3>
            <p className="text-slate-600">
              Números que falam por si só
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 ${stat.color} bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className={`text-2xl md:text-3xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
import React from 'react';
import { CheckCircle, ArrowRight, Crown, Zap, Shield, Rocket, Sparkles, DollarSign, Clock, TrendingUp, Coffee, Pizza, Utensils, Cake } from 'lucide-react';

const PricingSection = () => {
  const features = [
    "Cardápio digital ilimitado",
    "Integração completa WhatsApp",
    "Gestão avançada de pedidos",
    "Pagamentos automáticos (0% taxa)",
    "Domínio personalizado incluído",
    "Relatórios e analytics detalhados",
    "Personalização total da marca",
    "Suporte prioritário 24/7"
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-orange-50 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-100/30 to-orange-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-slate-100/30 to-slate-200/30 rounded-full blur-3xl animate-float-delayed"></div>
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-bold border border-orange-400/20 shadow-xl animate-bounce-slow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            <Crown className="w-5 h-5 animate-wiggle relative z-10" />
            <span className="relative z-10 text-lg">Plano Mais Popular</span>
            <Sparkles className="w-4 h-4 animate-pulse relative z-10" />
          </div>
        </div>

        {/* Main Pricing Container */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200 p-8 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Animated Border Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-orange-300/30 to-orange-200/30 rounded-3xl animate-pulse"></div>
          <div className="absolute inset-[1px] bg-white/98 rounded-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
            
            {/* Left Side - Pricing */}
            <div className="text-center lg:text-left animate-slide-in-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Plano Completo
              </h2>
              <div className="flex items-baseline justify-center lg:justify-start mb-6">
                <span className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">R$ 50</span>
                <span className="text-2xl text-slate-600 ml-3 font-medium">/mês</span>
              </div>
              <p className="text-slate-600 text-lg mb-8 font-medium">
                Tudo incluído • Sem taxas extras • Cancele quando quiser
              </p>
              
              <button className="group w-full lg:w-auto bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white px-12 py-5 rounded-2xl text-xl font-bold hover:from-orange-700 hover:via-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 mb-6 relative overflow-hidden border border-orange-400/20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                <span className="relative z-10 text-center">Começar Teste Grátis de 7 Dias</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
              </button>
              
              <p className="text-slate-600 text-sm font-medium">
                Sem compromisso • Setup gratuito • Suporte 24/7
              </p>
            </div>

            {/* Center - Features */}
            <div className="lg:col-span-2 animate-slide-in-right">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center lg:text-left">
                Tudo que você precisa para revolucionar seu restaurante:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 bg-gradient-to-r from-slate-50 to-orange-50/50 backdrop-blur-sm p-4 rounded-xl border border-slate-200 hover:from-orange-50 hover:to-orange-100/50 hover:border-orange-300 transition-all duration-300 hover:scale-105 animate-fade-in-up group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Stats with Enhanced Animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-slate-200">
            <div className="text-center group animate-slide-up">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 animate-float shadow-lg">
                <Zap className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">5 min</div>
              <div className="text-slate-600 font-medium">Para configurar tudo</div>
            </div>
            
            <div className="text-center group animate-slide-up-delayed">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-600 to-green-600 rounded-3xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 animate-float-delayed shadow-lg">
                <DollarSign className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">0%</div>
              <div className="text-slate-600 font-medium">Taxa nos pagamentos</div>
            </div>
            
            <div className="text-center group animate-slide-up-more-delayed">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 animate-float-slow shadow-lg">
                <TrendingUp className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">300%</div>
              <div className="text-slate-600 font-medium">Aumento em vendas</div>
            </div>
          </div>
        </div>

        {/* Enhanced Guarantee */}
        <div className="text-center mt-12 animate-bounce-in">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 backdrop-blur-lg px-8 py-4 rounded-2xl border border-slate-200 hover:from-orange-100 hover:via-orange-50 hover:to-orange-100 hover:border-orange-300 transition-all duration-300 hover:scale-105 shadow-xl">
            <Shield className="w-8 h-8 text-orange-600 animate-pulse" />
            <span className="text-lg font-bold text-slate-800">
              Garantia de 30 dias ou seu dinheiro de volta
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
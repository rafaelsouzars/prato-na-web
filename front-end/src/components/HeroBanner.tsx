import React from 'react';
import { ArrowRight, Play, Utensils, ChefHat, Pizza, Coffee, Croissant, IceCream } from 'lucide-react';
import StatsSection from './StatsSection';

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Enhanced Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-100/40 to-orange-200/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-slate-100/40 to-slate-200/40 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      {/* Animated Food Icons */}
      <div className="absolute top-32 right-16 md:right-32 text-orange-300/30 animate-float">
        <Pizza className="w-8 md:w-12 h-8 md:h-12" />
      </div>
      <div className="absolute bottom-32 left-16 md:left-32 text-slate-300/30 animate-float-delayed">
        <Coffee className="w-10 md:w-14 h-10 md:h-14" />
      </div>
      <div className="absolute top-1/4 left-10 text-orange-200/25 animate-bounce-slow">
        <Utensils className="w-6 md:w-8 h-6 md:h-8" />
      </div>
      <div className="absolute bottom-1/4 right-10 text-slate-200/25 animate-wiggle">
        <ChefHat className="w-8 md:w-10 h-8 md:h-10" />
      </div>
      <div className="absolute top-1/3 right-1/4 text-orange-200/20 animate-chef-bounce">
        <Croissant className="w-6 md:w-8 h-6 md:h-8" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 text-slate-300/20 animate-sizzle">
        <IceCream className="w-7 md:w-9 h-7 md:h-9" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <div>
          {/* Hero Content */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Revolucione seu
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Restaurante Digital
              </span>
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-10 md:mb-16 max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in-up-delayed font-medium">
            Crie cardápios digitais profissionais, receba pedidos pelo WhatsApp e revolucione a experiência dos seus clientes com tecnologia empresarial
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-16 md:mb-20 px-4 animate-fade-in-delayed">
            <button className="group bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl text-lg font-semibold hover:from-orange-700 hover:via-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 w-full sm:w-auto border border-orange-400/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              <span className="relative z-10 text-center">Começar Gratuitamente</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </button>
            
            <button className="group flex items-center justify-center gap-3 text-slate-700 hover:text-orange-600 transition-colors w-full sm:w-auto">
              <div className="w-12 h-12 bg-white/90 backdrop-blur-xl rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all border border-slate-200 group-hover:border-orange-200">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span className="font-medium">Ver Demonstração</span>
            </button>
          </div>

          {/* Stats Section */}
          <StatsSection />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
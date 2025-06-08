import React, { useState, useEffect } from 'react';
import { Menu, X, ChefHat } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrollY > 50 
        ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-slate-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              PRATO NA WEB
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#features" className="text-slate-700 hover:text-orange-600 transition-all duration-300 font-medium hover:scale-105 transform">
              Funcionalidades
            </a>
            <a href="#pricing" className="text-slate-700 hover:text-orange-600 transition-all duration-300 font-medium hover:scale-105 transform">
              Preços
            </a>
            <a href="#testimonials" className="text-slate-700 hover:text-orange-600 transition-all duration-300 font-medium hover:scale-105 transform">
              Depoimentos
            </a>
            <a href="#restaurants" className="text-slate-700 hover:text-orange-600 transition-all duration-300 font-medium hover:scale-105 transform">
              Parceiros
            </a>
            <button className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:from-orange-700 hover:via-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl border border-orange-400/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              <span className="relative z-10">Começar Agora</span>
            </button>
          </div>

          <button 
            className="md:hidden p-2 hover:bg-orange-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl">
          <div className="px-4 py-6 space-y-4">
            <a href="#features" className="block text-slate-700 hover:text-orange-600 font-medium py-2 hover:bg-orange-50 rounded-lg px-3 transition-all">
              Funcionalidades
            </a>
            <a href="#pricing" className="block text-slate-700 hover:text-orange-600 font-medium py-2 hover:bg-orange-50 rounded-lg px-3 transition-all">
              Preços
            </a>
            <a href="#testimonials" className="block text-slate-700 hover:text-orange-600 font-medium py-2 hover:bg-orange-50 rounded-lg px-3 transition-all">
              Depoimentos
            </a>
            <a href="#restaurants" className="block text-slate-700 hover:text-orange-600 font-medium py-2 hover:bg-orange-50 rounded-lg px-3 transition-all">
              Parceiros
            </a>
            <button className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg border border-orange-400/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              <span className="relative z-10 text-center">Começar Agora</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
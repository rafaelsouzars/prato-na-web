import React from 'react';
import { 
  ChefHat, 
  Sparkles, 
  Heart, 
  Phone, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Mail, 
  MapPin, 
  Rocket
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-orange-400 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-orange-600 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-orange-300 rounded-full animate-wiggle"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">PRATO NA WEB</span>
            </div>
            <p className="text-slate-400 mb-6 text-sm md:text-base leading-relaxed">
              A plataforma completa para revolucionar seu restaurante digital e aumentar suas vendas.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {[
                { icon: <Instagram className="w-5 h-5" />, href: "#" },
                { icon: <Facebook className="w-5 h-5" />, href: "#" },
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                { icon: <Youtube className="w-5 h-5" />, href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 border border-slate-700 hover:border-orange-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-orange-500" />
              Produto
            </h3>
            <ul className="space-y-3 text-slate-400">
              {[
                { text: "Funcionalidades", href: "#features" },
                { text: "Preços", href: "#pricing" },
                { text: "Integrações", href: "#" },
                { text: "API", href: "#" },
                { text: "Atualizações", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group hover:translate-x-1 transform"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              Suporte
            </h3>
            <ul className="space-y-3 text-slate-400">
              {[
                { text: "Central de Ajuda", href: "#" },
                { text: "Contato", href: "#" },
                { text: "WhatsApp", href: "#" },
                { text: "Tutoriais", href: "#" },
                { text: "Status", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group hover:translate-x-1 transform"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-500" />
              Contato
            </h3>
            <div className="space-y-4 text-slate-400">
              <div className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="text-sm">contato@pratonaweb.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="text-sm">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="text-sm">São Paulo, SP</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-white">Newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Seu e-mail"
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm focus:outline-none focus:border-orange-500 transition-colors hover:border-slate-600"
                />
                <button className="bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-2 rounded-lg hover:from-orange-700 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left text-slate-400">
              <p className="text-sm">
                &copy; 2024 PRATO NA WEB. Todos os direitos reservados.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-orange-500 transition-colors">Privacidade</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Termos</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Cookies</a>
            </div>
          </div>

          {/* Animated Bottom Bar */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600/20 to-orange-500/20 px-6 py-3 rounded-full border border-orange-500/30 hover:from-orange-600/30 hover:to-orange-500/30 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm">
              <Rocket className="w-4 h-4 text-orange-500 animate-bounce-slow" />
              <span className="text-sm text-orange-300">
                Feito com ❤️ para revolucionar restaurantes no Brasil
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
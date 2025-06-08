import React from 'react';
import { CheckCircle, Building2, TrendingUp, Users, Star, MapPin, Clock, Award, Coffee, Pizza, Utensils, Cake } from 'lucide-react';

const RestaurantsSection = () => {
  const restaurants = [
    {
      name: "Burger House",
      image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      type: "Hamburgueria",
      location: "São Paulo, SP",
      growth: "+280%",
      orders: "1.2k",
      rating: 4.9,
      featured: true
    },
    {
      name: "Pizzaria Bella",
      image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      type: "Pizzaria",
      location: "Rio de Janeiro, RJ",
      growth: "+320%",
      orders: "2.1k",
      rating: 4.8,
      featured: true
    },
    {
      name: "Sushi Zen",
      image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      type: "Japonês",
      location: "Curitiba, PR",
      growth: "+250%",
      orders: "890",
      rating: 5.0,
      featured: false
    },
    {
      name: "Taco Loco",
      image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      type: "Mexicano",
      location: "Belo Horizonte, MG",
      growth: "+190%",
      orders: "750",
      rating: 4.7,
      featured: false
    },
    {
      name: "Pasta Palace",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      type: "Italiano",
      location: "Porto Alegre, RS",
      growth: "+310%",
      orders: "1.5k",
      rating: 4.9,
      featured: false
    },
    {
      name: "BBQ Master",
      image: "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      type: "Churrascaria",
      location: "Brasília, DF",
      growth: "+270%",
      orders: "980",
      rating: 4.8,
      featured: false
    }
  ];

  const featuredRestaurants = restaurants.filter(r => r.featured);
  const otherRestaurants = restaurants.filter(r => !r.featured);

  return (
    <section id="restaurants" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-100/30 to-orange-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-slate-100/30 to-slate-200/30 rounded-full blur-3xl animate-float-delayed"></div>
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
        <Cake className="w-7 h-7" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Building2 className="w-4 h-4" />
            Parceiros
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 animate-fade-in-up">
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              +500 restaurantes
            </span>
            <br />
            <span className="text-slate-900">
              já confiam em nós
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto px-4 animate-fade-in-up-delayed font-medium leading-relaxed">
            Veja alguns dos restaurantes que já revolucionaram suas vendas com o PRATO NA WEB
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
            <div className="text-slate-600 font-medium">Restaurantes</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">+280%</div>
            <div className="text-slate-600 font-medium">Crescimento Médio</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">50k+</div>
            <div className="text-slate-600 font-medium">Pedidos/Mês</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 shadow-lg">
            <div className="text-3xl font-bold text-violet-600 mb-2">4.8★</div>
            <div className="text-slate-600 font-medium">Avaliação Média</div>
          </div>
        </div>

        {/* Featured Restaurants - Large Cards */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            Destaques do mês
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredRestaurants.map((restaurant, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  Destaque
                </div>

                {/* Restaurant Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Growth Badge */}
                  <div className="absolute bottom-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {restaurant.growth}
                  </div>
                </div>
                
                {/* Restaurant Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">
                        {restaurant.name}
                      </h4>
                      <div className="flex items-center gap-2 text-slate-600 text-sm mb-2">
                        <span className="bg-slate-100 px-2 py-1 rounded-full font-medium">{restaurant.type}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{restaurant.location}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-orange-600 mb-2">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="font-bold text-lg">{restaurant.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Users className="w-4 h-4" />
                      <span className="font-semibold">{restaurant.orders}</span>
                      <span className="text-sm">pedidos</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-emerald-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">Ativo desde 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Restaurants - Compact Grid */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            Outros parceiros de sucesso
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherRestaurants.map((restaurant, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                {/* Restaurant Image */}
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-slate-700">
                    {restaurant.type}
                  </div>
                  <div className="absolute bottom-2 left-2 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {restaurant.growth}
                  </div>
                </div>
                
                {/* Restaurant Info */}
                <div className="p-4">
                  <h4 className="font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {restaurant.name}
                  </h4>
                  
                  <div className="flex items-center gap-1 text-slate-500 text-xs mb-3">
                    <MapPin className="w-3 h-3" />
                    <span>{restaurant.location}</span>
                  </div>
                  
                  {/* Metrics Row */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-slate-600">
                      <Users className="w-3 h-3" />
                      <span className="font-semibold">{restaurant.orders}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-orange-600">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-semibold">{restaurant.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 md:p-12 rounded-3xl border border-orange-200 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Junte-se a esses restaurantes de sucesso
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Comece seu teste gratuito hoje e veja os resultados em poucos dias
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg">
                Começar Teste Grátis
              </button>
              <button className="border border-orange-300 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all">
                Ver Mais Casos de Sucesso
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
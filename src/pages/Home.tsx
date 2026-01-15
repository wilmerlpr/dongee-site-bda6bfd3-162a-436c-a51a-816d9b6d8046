import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck, Clock, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { products } = useShop();
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);

  return (
    <div className="pt-28 pb-12 space-y-24">
      {/* Hero Section */}
      <section className="relative px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-bold shadow-sm border border-orange-200">
              <Sparkles size={16} />
              <span>Bienvenido a Animalandia</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Felicidad pura para <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-yellow-500">tu mascota</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              La mejor selección de productos premium para consentir a quienes más te quieren. Calidad y amor en cada envío.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/shop" className="px-8 py-4 bg-brand-500 text-white rounded-2xl font-bold hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/25 flex items-center justify-center gap-2 hover:-translate-y-1">
                Comprar Ahora <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="px-8 py-4 bg-white text-gray-700 rounded-2xl font-bold hover:bg-gray-50 border border-gray-200 transition-all shadow-sm hover:shadow-md flex items-center justify-center">
                Conócenos
              </Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-200 to-yellow-200 rounded-full filter blur-[100px] opacity-40 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1000" 
              alt="Happy Dog"
              className="relative z-10 w-full h-auto rounded-[3rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {[ 
            { icon: <Truck size={32} />, title: "Envíos Rápidos", desc: "Entrega en 24/48 horas" },
            { icon: <ShieldCheck size={32} />, title: "Compra Segura", desc: "Protegemos tus datos" },
            { icon: <Clock size={32} />, title: "Atención 24/7", desc: "Expertos a tu servicio" }
          ].map((f, i) => (
            <div key={i} className="glass p-8 rounded-3xl flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300 border border-white/50">
              <div className="text-brand-500 bg-brand-50 p-4 rounded-2xl shadow-inner">{f.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{f.title}</h3>
                <p className="text-gray-500 mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Favoritos del Mes</h2>
            <p className="text-gray-500 text-lg">Los productos más amados por nuestra comunidad</p>
          </div>
          <Link to="/shop" className="text-brand-600 font-bold hover:text-brand-700 flex items-center gap-2 hover:translate-x-1 transition-transform bg-white px-4 py-2 rounded-xl shadow-sm">
            Ver Catálogo Completo <ArrowRight size={18} />
          </Link>
        </div>
        
        {featuredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/50 rounded-3xl border border-dashed border-gray-300">
             <p className="text-gray-500">Cargando productos destacados...</p>
          </div>
        )}
      </section>

      {/* Big CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left shadow-2xl">
           <img 
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
            alt="Dogs playing"
           />
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
             <div className="max-w-2xl">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">¿Primera vez adoptando?</h2>
               <p className="text-gray-300 text-xl leading-relaxed">Hemos preparado kits especiales con todo lo esencial para que la llegada de tu nuevo amigo sea perfecta.</p>
             </div>
             <Link to="/shop" className="whitespace-nowrap px-10 py-5 bg-white text-gray-900 rounded-2xl font-bold hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
               Ver Kits de Inicio
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
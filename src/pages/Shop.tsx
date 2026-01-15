import React from 'react';
import { Filter, Search } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const { products, filterCategory, activeCategory } = useShop();

  const categories = [
    { id: 'all', name: 'Todo' },
    { id: 'dogs', name: 'Perros' },
    { id: 'cats', name: 'Gatos' },
    { id: 'birds', name: 'Aves' },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Tienda</h1>
        <p className="text-gray-500 text-lg">Explora cientos de productos seleccionados para el bienestar de tu mascota.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-72 flex-shrink-0">
          <div className="glass p-6 rounded-3xl sticky top-28 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-6 text-gray-900 font-bold text-lg">
                <Filter size={20} />
                Categorías
              </div>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => filterCategory(cat.id === 'all' ? null : cat.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium flex justify-between items-center ${ 
                      (activeCategory === cat.id || (cat.id === 'all' && activeCategory === null))
                        ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                        : 'hover:bg-white text-gray-600 hover:shadow-sm'
                    }`}
                  >
                    {cat.name}
                    {(activeCategory === cat.id || (cat.id === 'all' && activeCategory === null)) && <div className="w-2 h-2 bg-white rounded-full" />}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-brand-50 rounded-2xl border border-brand-100">
              <h4 className="font-bold text-brand-800 mb-2">¿Necesitas ayuda?</h4>
              <p className="text-sm text-brand-600 mb-4">Nuestros expertos veterinarios pueden asesorarte.</p>
              <button className="text-sm font-bold text-brand-600 underline">Contactar soporte</button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {products.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                 <Search size={40} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">No encontramos productos</h3>
              <p className="text-gray-500">Intenta seleccionar otra categoría.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
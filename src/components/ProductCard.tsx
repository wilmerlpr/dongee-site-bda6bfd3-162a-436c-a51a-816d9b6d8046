import React from 'react';
import { Plus, Heart } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useShop();

  return (
    <div className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-3 shadow-sm hover:shadow-2xl transition-all duration-300 border border-white hover:-translate-y-1 flex flex-col h-full">
      <div className="relative overflow-hidden rounded-2xl h-64 bg-gray-100">
        <img 
          src={product.image_url} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full text-gray-400 hover:text-red-500 hover:scale-110 transition-all shadow-sm">
          <Heart size={18} />
        </button>
        
        {product.featured && (
          <span className="absolute top-3 left-3 bg-brand-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-lg shadow-brand-500/30">
            Destacado
          </span>
        )}
      </div>
      
      <div className="pt-4 pb-2 px-2 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
           <div>
             <p className="text-[10px] font-bold text-brand-500 uppercase tracking-widest mb-1">{product.category}</p>
             <h3 className="text-lg font-bold text-gray-800 leading-tight">{product.name}</h3>
           </div>
           <span className="text-lg font-bold text-gray-900 bg-white px-2 py-1 rounded-lg border border-gray-100 shadow-sm">
             ${product.price}
           </span>
        </div>
        
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">{product.description}</p>
        
        <button 
          onClick={() => addToCart(product)}
          className="mt-auto w-full flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-3 rounded-xl hover:bg-brand-600 transition-all font-medium active:scale-95"
        >
          <Plus size={18} />
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, PawPrint } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import CartDrawer from './CartDrawer';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useShop();
  const location = useLocation();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <nav className="fixed w-full z-50 top-0 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-500 text-white p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <PawPrint size={24} />
            </div>
            <span className="text-xl font-bold text-gray-800 tracking-tight">Animalandia</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {['Inicio', 'Tienda', 'Nosotros'].map((item) => {
              const path = item === 'Inicio' ? '/' : `/${item.toLowerCase().replace('tienda', 'shop').replace('nosotros', 'about')}`;
              const isActive = location.pathname === path;
              return (
                <Link
                  key={item}
                  to={path}
                  className={`font-medium transition-all ${isActive ? 'text-brand-600 font-bold' : 'text-gray-600 hover:text-brand-500'}`}
                >
                  {item}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full hover:bg-brand-50 transition-colors"
            >
              <ShoppingBag className="text-gray-700" size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-24 left-4 right-4 glass rounded-2xl p-4 flex flex-col gap-2 md:hidden animate-fade-in shadow-2xl">
             <Link to="/" onClick={() => setIsMenuOpen(false)} className="p-3 hover:bg-brand-50 rounded-xl text-gray-700 font-medium">Inicio</Link>
             <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="p-3 hover:bg-brand-50 rounded-xl text-gray-700 font-medium">Tienda</Link>
             <Link to="/about" onClick={() => setIsMenuOpen(false)} className="p-3 hover:bg-brand-50 rounded-xl text-gray-700 font-medium">Nosotros</Link>
          </div>
        )}
      </nav>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
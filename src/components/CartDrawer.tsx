import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { supabase } from '../lib/supabase';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, cartTotal, clearCart } = useShop();

  const handleCheckout = async () => {
    const { error } = await supabase.from('orders').insert([{
      total_amount: cartTotal,
      customer_email: 'cliente@ejemplo.com',
      items: cart
    }]);

    if (!error) {
      alert('¡Gracias por tu compra! 🐾');
      clearCart();
      onClose();
    } else {
      alert('Error al procesar el pedido. Intenta nuevamente.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col transform transition-transform duration-300 animate-slide-in border-l border-white/50">
        <div className="p-6 flex items-center justify-between border-b border-gray-100">
          <h2 className="text-xl font-bold flex items-center gap-2 text-gray-800">
            <ShoppingBag className="text-brand-500" />
            Tu Carrito
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-4">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                 <ShoppingBag size={32} />
              </div>
              <p className="font-medium">Tu carrito está vacío</p>
              <button onClick={onClose} className="text-brand-500 font-bold hover:underline">
                Explorar productos
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <img src={item.image_url} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-sm leading-tight mb-1">{item.name}</h3>
                  <p className="text-gray-500 text-xs">${item.price} x {item.quantity}</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span className="font-bold text-brand-600">${(item.price * item.quantity).toFixed(2)}</span>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-white">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 font-medium">Total a pagar</span>
              <span className="text-3xl font-bold text-brand-600">${cartTotal.toFixed(2)}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-brand-500 hover:bg-brand-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-brand-500/25 transition-all active:scale-95 flex justify-center items-center gap-2"
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
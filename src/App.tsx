import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import { ShopProvider } from './context/ShopContext';

function App() {
  return (
    <ShopProvider>
      <Router>
        <div className="min-h-screen font-sans antialiased text-gray-900 selection:bg-brand-500 selection:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<div className="pt-40 text-center text-gray-500 font-medium text-xl">Próximamente: Sobre Nosotros</div>} />
          </Routes>
          
          <footer className="bg-white border-t border-gray-200 py-12 px-6 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-brand-500 rounded-lg" />
                 <span className="text-xl font-bold text-gray-900">Animalandia</span>
              </div>
              <div className="text-gray-500 text-sm">
                © 2023 Animalandia. Hecho con amor para las mascotas.
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;
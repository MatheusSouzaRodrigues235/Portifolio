import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-[#0b001b] text-white w-full sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      {/* Container da Logo/Topo */}
      <div className="border-b-4 border-[#9B21E5]">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative py-4 px-6">
          {/* Logo alinhada à esquerda */}
          <div className="text-xl font-bold text-white tracking-wide">
            Portifólio
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8 font-semibold">
            <a href="#home" className="hover:text-[#9B21E5] transition-colors duration-200">Home</a>
            <a href="#projetos" className="hover:text-[#9B21E5] transition-colors duration-200">Projetos</a>
            <a href="#sobre" className="hover:text-[#9B21E5] transition-colors duration-200">Sobre Mim</a>
          </div>

          {/* Botão Hambúrguer para Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden ml-auto w-8 h-8 flex items-center justify-center text-white hover:text-[#9B21E5] transition-colors focus:outline-none"
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Menu Mobile: aparece abaixo da borda */}
      <div className={`md:hidden border-b-4 border-[#9B21E5] overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="max-w-7xl mx-auto flex flex-col gap-4 py-4 px-6 font-semibold">
          <li>
            <a href="#home" onClick={() => setIsOpen(false)} className="block hover:text-[#9B21E5] transition-colors py-2 border-b border-white/5">
              Home
            </a>
          </li>
          <li>
            <a href="#projetos" onClick={() => setIsOpen(false)} className="block hover:text-[#9B21E5] transition-colors py-2 border-b border-white/5">
              Projetos
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={() => setIsOpen(false)} className="block hover:text-[#9B21E5] transition-colors py-2">
              Sobre Mim
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
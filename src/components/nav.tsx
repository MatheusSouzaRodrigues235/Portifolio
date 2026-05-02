import React, { useState } from 'react';
import {Menu, X} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-[#0b001b] text-white w-full">
      {/* Container da Logo/Topo: borda na base atravessando tudo */}

      <div className="border-b-4 border-[#9B21E5]">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative py-4 px-6">
          <div className="absolute left-1/2 -translate-x-1/2 text-xl font-bold">Portifólio</div>
          <div className="invisible md:block">Menu</div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden ml-auto w-8 h-6">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Menu Mobile: aparece abaixo da borda acima */}
      <div className="md:hidden border-b-4 border-[#9B21E5]">
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className="max-w-7xl mx-auto flex flex-col gap-4 py-4 px-6">
            <li><a href="#home" className="block hover:text-blue-400">Home</a></li>
            <li><a href="#projetos" className="block hover:text-blue-400">Projetos</a></li>
            <li><a href="#sobre" className="block hover:text-blue-400">Sobre</a></li>
            </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
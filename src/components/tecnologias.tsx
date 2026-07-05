import React from "react";

import { listaTecnologias } from "../Data/tecnologiasData";

const Tecnologia: React.FC = () => {
  return (
    <section className="pt-30 pb-60 border-b-4 border-[#9B21E5]">
      <h1
        id="sobre"
        className="text-4xl font-bold mb-4 text-center m-auto py-16 px-6 pb-30"
      >
        Tecnologias
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 px-10 max-w-7xl mx-auto">
        {listaTecnologias.map((tech) => (
          <div 
            key={tech.id} 
            className="flex items-center justify-center p-4 bg-[#13131F] rounded-xl hover:scale-110 transition-transform duration-300"
          >
            <img 
              className="h-24 w-24 md:h-32 md:w-32 object-contain" 
              src={tech.src} 
              alt={tech.alt} 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tecnologia;
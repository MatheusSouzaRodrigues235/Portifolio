import React from "react";
import Paroquia from "../assets/images/Ellipse 3.png";

const Voluntariado: React.FC = () => {
  return (
    <section className="m-8 md:m-0 py-12 md:py-20 border-b-4 border-[#9B21E5]">
      {/* Título */}
      <div className="bg-[#13131F] rounded-lg p-6 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          VOLUNTARIADO
        </h1>
      </div>

      {/* Conteúdo */}
      <div className="bg-[#13131F] rounded-lg p-6 flex flex-col md:flex-row items-center justify-center md:justify-start gap-6">
        <img
          className="h-24 w-24 object-contain rounded-full flex-shrink-0"
          src={Paroquia}
          alt="Paróquia Coração de Jesus"
        />
        <a 
          href="https://www.youtube.com/@coracaodejesussjc" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-[#9B21E5] transition-colors text-center md:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Núcleo de transmissão - Pascom - Paróquia Coração de Jesus 
          </h2>
        </a>
      </div>
    </section>
  );
};

export default Voluntariado;

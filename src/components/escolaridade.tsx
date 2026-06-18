import React from "react";
import { ListaEscolaridade } from "../Data/escolaridadeData";

const Escolaridade: React.FC = () => {
  return (
    <section className="m-8 md:m-0 py-12 md:py-20 border-b-4 border-[#9B21E5]">
      {/* Título */}
      <div className="bg-[#13131F] rounded-lg p-6 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Escolaridade
        </h1>
      </div>

      {/* Lista de Escolaridade */}
      <div className="grid grid-cols-1 gap-6">
        {ListaEscolaridade.map((escolaridade, index) => (
          <div
            key={index}
            className="bg-[#13131F] rounded-lg p-6 flex flex-col md:flex-row items-center gap-6"
          >
            {escolaridade.image && (
              <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-lg p-2">
                <img
                  className="max-h-full max-w-full object-contain"
                  src={escolaridade.image}
                  alt={escolaridade.Instituicao ?? "Logo escolaridade"}
                />
              </div>
            )}
            <div className="flex flex-col justify-center text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                {escolaridade.Instituicao}
              </h2>
              {(escolaridade.dataInicio || escolaridade.dataConlusao || escolaridade.status) && (
                <p className="font-light text-sm text-gray-400">
                  {escolaridade.dataInicio} - {escolaridade.dataConlusao} |{" "}
                  <span className="text-[#9B21E5] font-medium">
                    {escolaridade.status}
                  </span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Escolaridade;

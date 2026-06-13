import React, {type  KeyboardEvent } from "react";
import { ListaProjetos } from "../Data/projetoData";

//Renderização do componente Projetos
const Projetos: React.FC = () => {

  const handleProjectClick = (projetoId: number, title: string) => {
    alert(`Projeto clicado: ${title} (ID: ${projetoId})`);
  };

  return (
    <>
      <section className="pt-30 pb-60 border-b-4 border-[#9B21E5]">
        <div className="relative ">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-7xl md:text-9xl font-bold opacity-10 select-none">
              PROJETOS
            </h1>
          </div>
          <div className="relative z-10 flex items-center justify-center">
            <span className="text-4xl md:text-6xl font-bold text-center">
              Meus Projetos
            </span>
          </div>
        </div>
       
        <div className="grid grid-cols-2 md:grid-cols-4 py-20 gap-8 px-10 mx-auto ml-80 mt-20">
          {/* Função map para renderizar os projetos dinamicamente */}
          {ListaProjetos.map((projeto) => {
            
            // Função que lida com o clique via teclado (Enter ou Espaço)
            const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault(); // Evita scroll da tela com a barra de espaço
                handleProjectClick(projeto.id, projeto.title);
              }
            };

            return (
              <div
                key={projeto.id}
                role="button"
                tabIndex={0}
                onClick={() => handleProjectClick(projeto.id, projeto.title)}
                onKeyDown={handleKeyDown}
                className="relative group overflow-hidden rounded-xl w-full max-w-sm h-64 bg-gray-900 text-white cursor-pointer select-none transition-all duration-200 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#9B21E5] active:scale-[0.98]"
              >
                <img
                  src={projeto.image}
                  alt={projeto.title}
                  className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="text-xl font-bold mb-3 tracking-wide">
                    {projeto.title}
                  </h3>

                  <div className="flex items-center justify-center gap-3 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                    {projeto.tecnologias?.map((techIcon, index) => (
                      <img
                        key={index}
                        src={techIcon}
                        alt={`${projeto.title} tecnologia ${index + 1}`}
                        className="w-5 h-5"
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-600"></div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projetos;

import React, { useState, type KeyboardEvent } from "react";
import { ListaProjetos, type ProjetosData } from "../Data/projetoData";


//Renderização do componente Projetos
const Projetos: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjetosData | null>(null);

  const handleProjectClick = (projetoId: number) => {
    const project = ListaProjetos.find((p) => p.id === projetoId);
    if (project) {
      setSelectedProject(project);
    }
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
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-20 gap-8 px-10 mx-auto mt-20">
          {/* Função map para renderizar os projetos dinamicamente */}
          {ListaProjetos.map((projeto) => {
            
            // Função que lida com o clique via teclado (Enter ou Espaço)
            const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault(); // Evita scroll da tela com a barra de espaço
                handleProjectClick(projeto.id);
              }
            };

            return (
              <div
                key={projeto.id}
                role="button"
                tabIndex={0}
                onClick={() => handleProjectClick(projeto.id)}
                onKeyDown={handleKeyDown}
                className="relative group overflow-hidden rounded-xl w-full max-w-sm h-64 bg-gray-900 text-white cursor-pointer select-none transition-all duration-200 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#9B21E5] active:scale-[0.98] mx-auto"
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

      {/* Modal de Detalhes do Projeto */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-gray-950 border border-purple-600 p-6 rounded-2xl max-w-lg w-full text-white relative shadow-2xl transition-all scale-100"
            onClick={(e) => e.stopPropagation()} // Impede fechar ao clicar dentro do modal
          >
            <button 
              onClick={() => setSelectedProject(null)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold cursor-pointer transition-colors duration-150"
              aria-label="Fechar modal"
            >
              ✕
            </button>
            
            <h2 className="text-2xl font-bold mb-4 text-[#9B21E5] border-b border-gray-800 pb-2">
              {selectedProject.title}
            </h2>
            
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full h-48 object-cover rounded-xl mb-4 border border-gray-800 shadow-inner"
            />
            
            <h4 className="text-sm font-semibold text-gray-400 mb-1">Sobre o projeto:</h4>
            <p className="text-gray-300 mb-5 leading-relaxed text-sm">
              {selectedProject.description}
            </p>
            
            <div className="flex items-center gap-4 mb-4">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#9B21E5] hover:bg-[#7A18B0] text-white font-semibold py-2 px-4 rounded-full transition-colors duration-150 border border-gray-800 mb-4"
              >
                Ver projeto
              </a>

              <div className="ml-auto">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Data de Publicação : {selectedProject.dataPublicacao}</h4>
              </div>
              
            </div> 
            
            <div className="flex flex-col gap-3 mr-4 items-center">
              <h4 className=" text-sm font-semibold text-gray-400 mb-2">Tecnologias utilizadas:</h4>
              <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm w-fit border border-gray-800">
                {selectedProject.tecnologias?.map((techIcon, index) => (
                  <img
                    key={index}
                    src={techIcon}
                    alt="tecnologia"
                    className="w-6 h-6 hover:scale-110 transition-transform duration-150"
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Projetos;

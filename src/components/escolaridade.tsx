import {ListaEscolaridade} from "../Data/escolaridadeData";

const desktopClasses = "hidden md:grid m-8 grid-flow-row gap-1  pb-60 ";
const mobileClasses = "grid md:hidden m-8 grid-flow-row gap-1 border-b-4 border-[#9B21E5]";

const Escolaridade: React.FC = () => {
  return (
    <>
      {/* Layout Desktop */}
      <div className="pt-30 pb-60 border-b-4 border-[#9B21E5]"> 
      <div className={desktopClasses}>
        <div className="bg-[#13131F] rounded-lg content-center  ">
          <h1
            id="sobre"
          className=" text-5xl font-bold mb-4 text-center mg-auto py-16 px-6"
          >
            Escolaridade
          </h1>

        </div>
        
        {ListaEscolaridade.map((escolaridade, index) => (
          <div key={index} className="bg-[#13131F] rounded-lg flex p-6 items-center">
            {escolaridade.image && (
              <div className="w-75 h-75 shrink-0 flex items-center justify-center bg-white/5 rounded-lg p-2">
                <img
                  className="max-h-full max-w-full object-contain"
                  src={escolaridade.image}
                  alt={escolaridade.Instituicao ?? "Logo escolaridade"}
                />
              </div>
            )}
            <div className="flex flex-col justify-center ml-6 text-left">
              <h2 className="text-xl font-bold text-white mb-2">
                {escolaridade.Instituicao}
              </h2>
              <h2 className="text-xl font-bold text-[#EF4444] mb-2 ">
                {escolaridade.Curso}
              </h2>
              
              {(escolaridade.dataInicio || escolaridade.dataConlusao || escolaridade.status) && (
                <p className="font-light text-sm text-gray-400">
                  {escolaridade.dataInicio} - {escolaridade.dataConlusao} | <span className="text-[#9B21E5] font-medium">{escolaridade.status}</span>
                </p>
              )}
            </div>
          </div>
        ))}

      </div>
    </div>

      {/* Layout Mobile */}
      <div className={mobileClasses}>
        <div className="bg-[#13131F] rounded-lg content-center  ">
          <h1
            id="sobre"
          className=" text-5xl font-bold mb-4 text-center mg-auto py-16 px-6"
          >
            Escolaridade
          </h1>
        </div>
        {ListaEscolaridade.map((escolaridade, index) => (
          <div key={index} className="bg-[#13131F] rounded-lg p-6">
            {escolaridade.image && (
              <img
                className="h-auto max-w-full mx-auto"
                src={escolaridade.image}
                alt={escolaridade.Instituicao ?? escolaridade.Instituicao ?? "Logo escolaridade"}
              />
            )}
            <h2 className="text-xl font-bold text-center mt-6">
              {escolaridade.Instituicao ?? escolaridade.Instituicao}
            </h2>
            <h2 className="text-xl font-bold text-center mt-6">
              {escolaridade.Curso ?? escolaridade.Curso}
            </h2>
            {(escolaridade.dataInicio || escolaridade.dataConlusao || escolaridade.status) && (
              <p className="mt-4 text-center">
                {escolaridade.dataInicio ?? escolaridade.dataInicio} - {escolaridade.dataConlusao ?? escolaridade.dataConlusao} | {escolaridade.status}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Escolaridade;

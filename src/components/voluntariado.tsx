import Paroquia from "../assets/images/Ellipse 3.png";

const desktopClasses = "hidden md:grid m-8 grid-flow-row gap-1 pt-70 pb-70 justify-center items-center";
const mobileClasses = "grid md:hidden m-8 grid-flow-row gap-1 border-b-4 border-[#9B21E5]";

const Escolaridade: React.FC = () => {
  return (
    <>
      {/* Layout Desktop */}
      <div className="pt-30 pb-60 border-b-4 border-[#9B21E5] "> 
      <div className={desktopClasses}>
        <div className="bg-[#13131F] rounded-lg content-center ">
          <h1
            id="sobre"
          className=" text-5xl font-bold mb-4 text-center mg-auto "
          >
            VOLUNTARIADO
          </h1>
        </div>
        <div className="bg-[#13131F] rounded-lg flex">
          <div className="flex items-center justify-center p-4">
            <img
              className="h-85"
              src={Paroquia}
              alt="image description"
            />
            <a href="https://www.youtube.com/@coracaodejesussjc" target="_blank" rel="noopener noreferrer">
            <h1 className="text-3xl font-bold  text-center ml-50 py-16 px-6">
              Núcleo de transmissão - Pascom - Paróquia Coração de Jesus 
            </h1>
            </a>
          </div>
        </div>
      </div>
      </div>

      {/* Layout Mobile */}
      <div className={mobileClasses}>
        <div className="bg-[#13131F] rounded-lg content-center ">
          <h1 className=" text-5xl font-bold  text-center  py-16 ">
            VOLUNTARIADO
          </h1>
        </div>
        <div id="Paroquia">
          <img
            className="ml-3 h-85"
            src={Paroquia}
            alt="image description"
          />
          <h1 className="text-3xl font-bold    py-16 px-6">
              Núcleo de transmissão - Pascom - Paróquia Coração de Jesus 
          </h1>
        </div>
        
      </div>
    </>
  );
};

export default Escolaridade;

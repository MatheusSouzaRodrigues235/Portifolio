import icones from "../assets/images/icons/html-5.png";
import icone from "../assets/images/icons/css-3.png";
import java from "../assets/images/icons/java.png";
import php from "../assets/images/icons/php.png";
const Tecnologia: React.FC = () => {
  return (
    <>
      {/* Grid de Tecnologia */}
      <h1
        id="sobre"
        className="text-7xl font-bold mb-4 text-center mg-auto py-16 px-6"
      >
        Tecnologias
      </h1>

      <div className="grid grid-cols-4 gap-4 border-b-4 border-[#9B21E5]">
        <div>
          <img
            className="h-auto max-w-full"
            src={icones}
            alt="image description"
          />
        </div>
        <div>
          {" "}
          <img
            className="h-auto max-w-full"
            src={icone}
            alt="image description"
          />
        </div>
        <div>
          {" "}
          <img
            className="h-auto max-w-full"
            src={java}
            alt="image description"
          />
        </div>
        <div>
          {" "}
          <img
            className="h-auto max-w-full"
            src={php}
            alt="image description"
          />{" "}
        </div>
      </div>

    
    </>
  );
};

export default Tecnologia;

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

      <div className="grid grid-cols-4 gap-4">
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

      {/* 
    <div className="bg-[#13131F] text-white p-4 h-full w-full border-b-4 border-[#9B21E5] ">
        <h1 id="sobre" className="text-7xl font-bold mb-4 text-center mg-auto py-16 px-6" >Tecnologias </h1>    
    


        <div className ="m-8 p-8 grid bg-[#13131F] grid-rows-2 
                     grid-flow-col gap-4 auto-cols-fr"> 
            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={icones} alt="image description" />
            </div> 
            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={icone} alt="image description" />
            </div> 
            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={java} alt="image description" />
            </div> 
            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={php} alt="image description" />
            </div> 

             <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={icones} alt="image description" />
            </div> 
            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={icone} alt="image description" />
            </div> 
            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={java} alt="image description" />
            </div> 
            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={php} alt="image description" />
            </div> 

            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={icones} alt="image description" />
            </div> 
            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={icone} alt="image description" />
            </div> 
            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={java} alt="image description" />
            </div> 
            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={php} alt="image description" />
            </div> 
            
            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={icones} alt="image description" />
            </div> 
            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={icone} alt="image description" />
            </div> 
            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={java} alt="image description" />
            </div> 
            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={php} alt="image description" />
            </div> 

            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={icones} alt="image description" />
            </div> 
            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={icone} alt="image description" />
            </div> 
            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={java} alt="image description" />
            </div> 
            <div className = "p-4 bg-[#13131F]">
                <img className="h-auto max-w-full" src={php} alt="image description" />
            </div> 
        </div> 
    
    </div> */}
    </>
  );
};

export default Tecnologia;

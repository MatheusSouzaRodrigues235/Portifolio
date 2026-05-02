import image from '../assets/images/3.png'
const Header : React.FC = () => {
    return(
    <div className="flex bg-[#0b001b] p-4 border-b-4 border-[#9B21E5] ">
        <div className="flex-1 bg-[#0b001b] rounded-lg">
            <div id="Textos" className="flex flex-col gap-8 justify-center items-center h-full">
                <h1 className="text-8xl text-center text-white">Bem Vindo !</h1>
                <p className="text-4xl text-center text-white">Meu nome é Matheus Souza Rodrigues </p>    
            </div>
        </div>

        <div className="flex-1  rounded-lg">
            <div className="bg-[#0b001b] w-full h-full">
                <div id="Imagem" className="flex flex-col gap-8 justify-center items-center h-full">
                    <img className="h-auto max-w-full" src={image} alt="image description" />
                </div>
            </div>     
        </div>
    </div>

        

    );
};

export default Header;
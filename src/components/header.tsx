import image from "../assets/images/3.png";

const Header: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full h-full bg-[#13131F] border-b-4 border-[#9B21E5]">
        <div
          id="Textos"
          className="order-last md:col-span-3 col-span-1 flex flex-col gap-8 justify-center items-center bg-[#13131F] text-white p-4 h-full w-full"
        >
          <h1 className="text-8xl text-center">Bem Vindo !</h1>
          <p className="text-4xl text-center">
            Meu nome é Matheus Souza Rodrigues
          </p>
        </div>

        <div className=" hidden md:flex order-last col-span-1 flex-col gap-8 justify-center items-center bg-[#13131F] rounded-lg p-4">
          <img
            id="image-full"
            className="h-auto max-w-full"
            src={image}
            alt="image description"
          />
        </div>
        <div className=" md:hidden order-first col-span-1 flex-col gap-8 justify-center items-center bg-[#13131F] rounded-lg p-4">
          <img
            className="md:hidden h-auto max-w-full"
            src={image}
            alt="image description"
          />
        </div>
      </div>
    </>
  );
};

export default Header;

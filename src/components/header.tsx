import React from "react";
import image from "../assets/images/3.png";

const Header: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full bg-[#13131F] border-b-4 border-[#9B21E5] py-16 md:py-24 px-6 md:px-12 items-center">
      {/* Imagem: no mobile fica em cima (order-first), no desktop fica na direita (md:order-last) */}
      <div className="order-first md:order-last col-span-1 flex justify-center items-center p-4">
        <img
          className="h-auto max-w-[250px] md:max-w-full object-contain"
          src={image}
          alt="Matheus Souza Rodrigues"
        />
      </div>

      {/* Textos: no mobile fica embaixo (order-last), no desktop fica na esquerda (md:order-first) */}
      <div
        id="Textos"
        className="order-last md:order-first md:col-span-3 col-span-1 flex flex-col gap-6 justify-center items-center md:items-start text-white p-4"
      >
        <h1 className="text-5xl md:text-8xl text-center md:text-left font-bold w-full">
          Bem Vindo !
        </h1>
        <p className="text-2xl md:text-4xl text-center md:text-left text-gray-300 w-full">
          Meu nome é Matheus Souza Rodrigues
        </p>
      </div>
    </section>
  );
};

export default Header;

import React from "react";
import WhatsAPP from "../assets/images/icons/logos_whatsapp-icon.png";
import Linkedin from "../assets/images/icons/skill-icons_linkedin.png";
import Github from "../assets/images/icons/devicon_github.png";
import { Mail } from "lucide-react";

const Contato: React.FC = () => {
  return (
    <section className="bg-[#343A40] min-h-[400px] py-20 text-white overflow-hidden">
      <div className="relative h-64 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-7xl md:text-9xl font-bold opacity-10 select-none">
            CONTATO
          </h1>
        </div>
        <div className="relative z-10 flex items-center justify-center">
          <span className="text-4xl md:text-6xl font-bold text-center">
            Converse Comigo
          </span>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-around gap-10 px-10">
        {/* WhatsApp */}
        <div className="flex items-center">
          <a
            href="https://wa.me/5512996605297"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 hover:scale-105 transition-transform"
          >
            <img
              className="w-14 h-14 object-contain"
              src={WhatsAPP}
              alt="Logo WhatsApp"
            />
            <span className="text-xl md:text-3xl font-bold">
              (12) 99660-5297
            </span>
          </a>
        </div>

        {/* E-mail */}
        <div className="flex items-center">
          <a
            href="mailto:matheussouzarodrigues110312@gmail.com"
            className="flex items-center gap-5 hover:scale-105 transition-transform"
          >
            <div className="bg-[#9B21E5] p-3 rounded-lg">
              <Mail size={32} color="white" />
            </div>
            <span className="text-lg md:text-2xl font-bold break-all">
              matheussouzarodrigues110312@gmail.com
            </span>
          </a>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center">
        <h3 className="text-5xl font-bold mb-4">SIGA ME</h3>
        <div className="w-full border-t-2 border-[#9B21E5] opacity-50"></div>
      </div>
    <div className="mt-12 flex flex-col md:flex-row items-center justify-around gap-10 px-10">
      <div className="flex items-center">
        <a
          href="www.linkedin.com/in/matheus-rodrigues-262108246"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-5 hover:scale-105 transition-transform"
        >
          <img
            className="w-14 h-14 object-contain"
            src={Linkedin}
            alt="Logo WhatsApp"
          />
          <span className="text-xl md:text-1xl font-bold">www.linkedin.com/in/matheus-rodrigues-262108246</span>
        </a>
      </div>
      <div className="flex items-center">
        <a
          href="https://github.com/MatheusSouzaRodrigues235"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-5 hover:scale-105 transition-transform"
        >
          <img
            className="w-14 h-14 object-contain"
            src={Github}
            alt="Logo WhatsApp"
          />
          <span className="text-xl md:text-1xl font-bold">https://github.com/MatheusSouzaRodrigues235</span>
        </a>
      </div>
    </div>
    </section>
  );
};

export default Contato;

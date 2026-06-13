import React from "react";

import htmlIcon from "../assets/images/icons/html-5.png";
import cssIcon from "../assets/images/icons/css-3.png";
import angularIcon from "../assets/images/icons/file_type_angular_icon_130754.png";
import javaIcon from "../assets/images/icons/java.png";
import phpIcon from "../assets/images/icons/php.png";
import nodeIcon from "../assets/images/icons/Node.js_logo.svg.png";
import trelloIcon from "../assets/images/icons/trello.png";
import gitIcon from "../assets/images/icons/git_original_wordmark_logo_icon_146510.png";
import jsIcon from "../assets/images/icons/javascript_original_logo_icon_146455.png";
import dotNetIcon from "../assets/images/icons/dot_net_original_wordmark_logo_icon_146547.png";
import springBootIcon from "../assets/images/icons/simple-icons--springboot.svg";

interface TecnologiaData {
  id: number;
  src: string;
  alt: string;
}

const listaTecnologias: TecnologiaData[] = [
  { id: 1, src: htmlIcon, alt: "HTML5" },
  { id: 2, src: cssIcon, alt: "CSS3" },
  { id: 3, src: javaIcon, alt: "Java" },
  { id: 11, src: springBootIcon, alt: "Spring Boot" },
  { id: 4, src: phpIcon, alt: "PHP" },
  { id: 5, src: nodeIcon, alt: "Node.js" },
  { id: 6, src: trelloIcon, alt: "Trello" },
  { id: 7, src: gitIcon, alt: "Git" },
  { id: 8, src: jsIcon, alt: "JavaScript" },
  { id: 9, src: angularIcon, alt: "Angular" },
  { id: 10, src: dotNetIcon, alt: ".NET" },
];

const Tecnologia: React.FC = () => {
  return (
    <section className="pt-30 pb-60 border-b-4 border-[#9B21E5]">
      <h1
        id="sobre"
        className="text-7xl font-bold mb-4 text-center m-auto py-16 px-6 pb-30"
      >
        Tecnologias
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 px-10 max-w-7xl mx-auto">
        {listaTecnologias.map((tech) => (
          <div 
            key={tech.id} 
            className="flex items-center justify-center p-4 bg-[#13131F] rounded-xl hover:scale-110 transition-transform duration-300"
          >
            <img 
              className="h-24 w-24 md:h-32 md:w-32 object-contain" 
              src={tech.src} 
              alt={tech.alt} 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tecnologia;
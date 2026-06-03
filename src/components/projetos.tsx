import Banner from "../assets/images/Banner.png";
import herosGames from "../assets/images/herosGames.png";
import JavaSpringBoot from "../assets/images/JavaSpring.jfif";
// Importação Icones (Talvez seja necessário outra forma de importação)
import htmlIcon from "../assets/images/icons/html-5.png";
import cssIcon from "../assets/images/icons/css-3.png";
import angularIcon from "../assets/images/icons/file_type_angular_icon_130754.png";
import javaIcon from "../assets/images/icons/java.png";
import phpIcon from "../assets/images/icons/php.png";
import nodeIcon from "../assets/images/icons/Node2.svg";
import trelloIcon from "../assets/images/icons/trello.png";
import gitIcon from "../assets/images/icons/git_original_wordmark_logo_icon_146510.png";
import jsIcon from "../assets/images/icons/javascript_original_logo_icon_146455.png";
import dotNetIcon from "../assets/images/icons/dot_net_original_wordmark_logo_icon_146547.png";
import handleBarIcon from "../assets/images/icons/handlebar.svg";
import mySQL from "../assets/images/icons/mySQL.svg";
import netBeansIcon from "../assets/images/icons/devicon--netbeans.svg";
import springBootIcon from "../assets/images/icons/simple-icons--springboot.svg";

// Interface para os dados dos projetos
interface ProjetosData {
  id: number;
  title: string;
  description: string;
  image?: string;
  tecnologias?: string[];
}

// Array de objetos representando os projetos (Exemplo)
const ListaProjetos: ProjetosData[] = [
  {
    id: 1,
    title: "Agendou Tosou",
    description: "Descrição do projeto 1",
    image: Banner,
    tecnologias: [htmlIcon, cssIcon, jsIcon, nodeIcon, handleBarIcon],
  },
  {
    id: 2,
    title: "Heros Games",
    description: "Descrição do projeto 2",
    image: herosGames,
    tecnologias:[javaIcon, trelloIcon, mySQL , netBeansIcon],
  },
  {
    id: 3,
    title: "Api com Java Spring Boot",
    description: "Descrição do projeto 2",
    image: JavaSpringBoot,
    tecnologias:[javaIcon,  mySQL , springBootIcon],
  },
 
];

//Renderização do componente Projetos
const Projetos: React.FC = () => {
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

        <div className="  grid grid-cols-2 md:grid-cols-4  py-20 gap-8 px-10  mx-auto ">
          //Função map para renderizar os projetos dinamicamente
          {ListaProjetos.map((projeto) => (
            <div
              key={projeto.id}
              className="relative group overflow-hidden rounded-xl w-full max-w-sm h-64 bg-gray-900 text-white"
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
          ))}
        </div>
      </section>
    </>
  );
};
export default Projetos;

import Banner from "../assets/images/Banner.png";
import herosGames from "../assets/images/herosGames.png";
import JavaSpringBoot from "../assets/images/JavaSpring.jfif";
import tccImage from "../assets/images//Images.jpeg";
// Importação Icones (Talvez seja necessário outra forma de importação)
import htmlIcon from "../assets/images/icons/html-5.png";
import cssIcon from "../assets/images/icons/css-3.png";
import javaIcon from "../assets/images/icons/java.png";
import nodeIcon from "../assets/images/icons/Node2.svg";
import trelloIcon from "../assets/images/icons/trello.png";
import gitIcon from "../assets/images/icons/git_original_wordmark_logo_icon_146510.png";
import jsIcon from "../assets/images/icons/javascript_original_logo_icon_146455.png";
import handleBarIcon from "../assets/images/icons/handlebar.svg";
import mySQL from "../assets/images/icons/mySQL.svg";
import netBeansIcon from "../assets/images/icons/devicon--netbeans.svg";
import springBootIcon from "../assets/images/icons/simple-icons--springboot.svg";
import phpIcon from "../assets/images/icons/php.png";
import tailwindIcon from "../assets/images/icons/Tailwind CSS.png";
export { ListaProjetos };

// Interface para os dados dos projetos
export interface ProjetosData {
  id: number;
  title: string;
  description: string;
  image?: string;
  tecnologias?: string[];
  link?: string;
  dataPublicacao?: string;
}


// Array de objetos representando os projetos (Exemplo)
const ListaProjetos: ProjetosData[] = [
  {
    id: 1,
    title: "Agendou Tosou",
    description: "Este projeto é um sistema de agendamento de serviços de uma barbearia, foi desenvolvido utilizando Node.js, Express e Handlebars para o frontend. Sistema permite aos clientes agendar horários para cortes de cabelo, enquanto o barbeiro pode gerenciar os agendamentos e visualizar o calendário de seus compromisso. O Sistema foi desenvolvido como parte de um projeto integrado quando estava cursando o curso de Análise e Desenvolvimento de Sistemas na UNIVAP .",
    link: "https://github.com/MatheusSouzaRodrigues235/ProjetoIntegrado2Node",
    dataPublicacao: "12/06/2023",
    image: Banner,
    tecnologias: [htmlIcon, cssIcon, jsIcon, nodeIcon, handleBarIcon, gitIcon],
  },
  {
    id: 2,
    title: "Heros Games",
    description: "Descrição do projeto 2",
    link:"https://github.com/MatheusSouzaRodrigues235/Projeto-Integrado-Ads-1Trimestre",
    dataPublicacao:"15/05/2023",
    image: herosGames,
    tecnologias:[javaIcon, trelloIcon, mySQL , netBeansIcon, gitIcon],
  },
  {
    id: 3,
    title: "Api com Java Spring Boot",
    description: "Descrição do projeto 2",
    link:"https://github.com/MatheusSouzaRodrigues235/Trabalho-Uninter-Api-Rest-Spring-Boot",
    dataPublicacao:"15/12/2025",
    image: JavaSpringBoot,
    tecnologias:[javaIcon,  mySQL , springBootIcon, gitIcon],
  },
  {
    id: 4, 
    title: "E-commerce de veículos (TCC ETEC)",
    description:"E-commerce de veículos desenvolvido como trabalho de conclusão de curso.",
    link:"https://github.com/MatheusSouzaRodrigues235/E-commerce-Veiculos",
    dataPublicacao: "07/06/2022",
    image: tccImage,
    tecnologias:[phpIcon, htmlIcon, cssIcon, mySQL, gitIcon, trelloIcon,tailwindIcon],
  }
];
export {chartList, COLORS};
export interface CourseChart {
  id: number;
  courseTitle: string;
  progresso: number; // Porcentagem de conclusão (0 a 100)
  linkCertificado?:string;
}
const COLORS = ["#3FFF05", "#E31212"];

const chartList: CourseChart[] = [
  {
    id: 1,
    courseTitle: "AWS Academy Graduate - Cloud Foundations - Training Badge",
    progresso: 100,
    linkCertificado:"https://www.credly.com/earner/earned/badge/22a26b60-3b31-4e58-ba28-633ef02fc16e"
  },
  {
    id: 2,
    courseTitle: "Introduction to Cybersecurity",
    progresso: 100,
    linkCertificado:"https://www.credly.com/earner/earned/badge/da465797-ba5e-45da-8b5e-f3593454641b"
  },
  {
    id: 3,
    courseTitle: "Trilha Digital - Coders 24 - Data Science",
    progresso: 100,
    linkCertificado:"https://site.ada.tech/certificado?code=3e4dbc71-05cf-aed1-2079-fa3a933cd308"
  },
  {
    id: 4,
    courseTitle: "Desenvolvimento em Java Script - SENAI",
    progresso: 90,
  },
  
  {
    id: 5,
    courseTitle: "Formação Lógica de Programação - DIGITAL INNOVATION ONE",
    progresso: 20,
  },
  {
    id: 6,
    courseTitle: "JavaScript e TypeScript do básico ao avançado - JS + TS - Luiz Otávio Miranda - UDEMY",
    progresso: 4,
  },

];
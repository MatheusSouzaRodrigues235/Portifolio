import LogoEtec from "../assets/images/LOGO-ETEC 1.png";
import LogoUninter from "../assets/images/9f6e1e4d3455e0774a343aed974ac4e9 1.png";
import UnivapUnifeob from "../assets/images/UNIVAPUNIFEOB.png";
export { ListaEscolaridade };
// Interface - Dados de escolaridade
export interface EscolaridadeData {
  id: number;
  Instituicao: string;
  Curso: string;
  image?: string;
  status: string;
  dataInicio?: string;
  dataConlusao?: string;
}

const ListaEscolaridade: EscolaridadeData[] = [
  {
    id: 1,
    Instituicao:
      "Escola Técnica Estadual Professora Ilza Nascimento Pintus - ETEC",
    Curso: "Técnico em Desenvolvimento de Sistemas",
    image: LogoEtec,
    status: "Concluído",
    dataInicio: "2021",
    dataConlusao: "2022",
  },
  {
    id: 2,
    Instituicao: "Centro Universitário Internacional (Uninter)",
    Curso: "Bacharelado em Engenharia de Software",
    image: LogoUninter,
    status: "Cursando",
    dataInicio: "2024",
    dataConlusao: "2028",
  },
  {
    id: 3,
    Instituicao: "UNIVAP - UNIFEOB",
    Curso: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    image: UnivapUnifeob,
    status: "Transferência para Uninter",
    dataInicio: "2023",
    dataConlusao: "Trancada",
  }
];

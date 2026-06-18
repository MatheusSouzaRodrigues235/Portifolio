import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { chartList, COLORS} from "../Data/cursosCompData";

const Cursos: React.FC = () => {
  return (
    <>
      <div className="pt-20 border-b-4 border-[#9B21E5]">
        <h1 className="text-center text-4xl font-bold pb-20">
          Cursos Complementares
        </h1>

        <div
          id="main"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10 pb-60"
        >
          {chartList.map((cursos) => {
            const dataGrafico = [
              { name: "Concluído", valor: cursos.progresso },
              { name: "Não Concluído", valor: Math.max(0, 100 - cursos.progresso) },
            ];

            return (
              <a
                href={cursos.linkCertificado}
                key={cursos.id}
                className="bg-[#13131F] rounded-lg p-6 flex flex-col items-center border-b-4 border-[#9B21E5]"
                target="_blank"
              >
                <h2 className="text-xl font-bold mb-6 text-center text-white min-h-14 flex items-center justify-center">
                  {cursos.courseTitle}
                </h2>
                
                <div id="teste" className="w-52 h-52 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={dataGrafico}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={85}
                        dataKey="valor"
                        stroke="none"
                        startAngle={90}
                        endAngle={-270}
                      >
                        {dataGrafico.map((_, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`]} />
                      {/* Texto no centro do gráfico mostrando a porcentagem */}
                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#FFFFFF"
                        className="text-2xl font-bold"
                      >
                        {`${cursos.progresso}%`}
                      </text>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cursos;

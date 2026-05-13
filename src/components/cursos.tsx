import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ChartData {
  name: string;
  value: number;
}
const data: ChartData[] = [{ name: "Concluído", value: 100 }];
const COLORS = ["#EF4444"];

const Cursos: React.FC = () => {
  return (
    <>
     
    <div className="pt-60 ">
           <h1 className="text-center text-4xl font-bold pb-20">Cursos Complementares</h1>

      <div id="main" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10 border-b-4 border-[#9B21E5] pb-60 ">
        <div className="bg-[#13131F] rounded-lg m-4  place-items-center border-b-4 border-[#9B21E5] ">
          <div className=" grid grid-rows  ">
            <div  className="ml-7">
             <h2 className="text-2xl"> Trilha Digital | Data Science - ADA TECH (2024) </h2>
            </div>
            <div id="teste" className="w-52 h-52 m-auto ">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={85}
                    dataKey="value"
                    stroke="none"
                    label={{
                      position: "center",
                      fill: "#9CA3AF",
                      fontSize: 32,
                      fontWeight: "bold",
                      dy: 6,
                    }}
                  >
                    {data.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-[#13131F] rounded-lg m-4  place-items-center border-b-4 border-[#9B21E5]">
          <div className=" grid grid-rows  ">
            <div  className="ml-7">
             <h2 className="text-2xl"> Trilha Digital | Data Science - ADA TECH (2024) </h2>
            </div>
            <div id="teste" className="w-52 h-52 m-auto ">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={85}
                    dataKey="value"
                    stroke="none"
                    label={{
                      position: "center",
                      fill: "#9CA3AF",
                      fontSize: 32,
                      fontWeight: "bold",
                      dy: 6,
                    }}
                  >
                    {data.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="bg-[#13131F] rounded-lg m-4  place-items-center border-b-4 border-[#9B21E5]">
          <div className=" grid grid-rows  ">
            <div  className="ml-7">
             <h2 className="text-2xl"> Trilha Digital | Data Science - ADA TECH (2024) </h2>
            </div>
            <div id="teste" className="w-52 h-52 m-auto ">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={85}
                    dataKey="value"
                    stroke="none"
                    label={{
                      position: "center",
                      fill: "#9CA3AF",
                      fontSize: 32,
                      fontWeight: "bold",
                      dy: 6,
                    }}
                  >
                    {data.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-[#13131F] rounded-lg m-4  place-items-center border-b-4 border-[#9B21E5]">
          <div className=" grid grid-rows  ">
            <div  className="ml-7">
             <h2 className="text-2xl"> Trilha Digital | Data Science - ADA TECH (2024) </h2>
            </div>
            <div id="teste" className="w-52 h-52 m-auto ">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={85}
                    dataKey="value"
                    stroke="none"
                    label={{
                      position: "center",
                      fill: "#9CA3AF",
                      fontSize: 32,
                      fontWeight: "bold",
                      dy: 6,
                    }}
                  >
                    {data.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>


      </div>
      </div>
    </>
  );
};

export default Cursos;

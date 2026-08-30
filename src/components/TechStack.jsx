import React from 'react';
import { Map, Globe, SquareTerminal, BarChart, Database, Box, Server } from 'lucide-react';

const technologies = [
  { name: 'ArcGIS Pro', icon: Map },
  { name: 'QGIS', icon: Globe },
  { name: 'Python', icon: SquareTerminal },
  { name: 'R', icon: BarChart },
  { name: 'PostgreSQL /\nPostGIS', icon: Database },
  { name: 'Agisoft\nMetashape', icon: Box },
  { name: 'SQL Server', icon: Server },
];

const TechStack = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-black-1 font-bold mb-4">
            Tecnología Aplicada
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-body-md text-black-3 max-w-3xl mx-auto">
            Dominio de lenguajes y software especializado para el procesamiento complejo de datos espaciales, gestión de bases de datos y modelamiento territorial.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 border border-gray-50 h-[180px]"
              >
                <div className="text-primary mb-4">
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-body-sm font-bold text-black-1 whitespace-pre-line leading-tight">
                  {tech.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

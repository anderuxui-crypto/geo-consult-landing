import { useState } from 'react';
import ProjectModal from './ProjectModal';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Elaboración, sistematización y estandarización del mapa zonificación urbana de la provincia de Cusco.",
            category: "Exploración Mineral",
            location: "Perú",
            shortDescription: "Establece reglas claras de zonificación para un desarrollo urbano ordenado, seguro y respetuoso del patrimonio cultural en la provincia de Cusco.",
            fullDescription: "Resuelve el desordenado crecimiento de la ciudad al establecer reglas claras sobre qué usos y actividades (residencial, comercial, industrial, protección patrimonial y ambiental) se permiten en cada zona, evitando conflictos entre usos incompatibles; protege el patrimonio histórico regulando alturas, materiales e intervenciones en el territorio diagnosticado; identifica áreas de riesgo geológico no aptas para construcción, dado el relief andino de la región; brinda seguridad jurídica para licencias, subdivisiones de predios e inversión inmobiliaria; y orienta la inversión pública en infraestructura y servicios según la vocación de cada sector, garantizando así un desarrollo urbano ordenado, seguro y respetuoso del patrimonio cultural.",
            images: [
                { url: "/mp-fe-01-mapa-de-clasificacion-general-del-suelo-1.jpg", title: "Mapa de Clasificación General del Suelo" },
                { url: "/mp-fe-02-mapa-de-subclasificacion-de-suelo.jpg", title: "Mapa de Subclasificación de Suelo" },
                { url: "/mp-fe-03-mapa-de-zonificacion.jpg", title: "Mapa de Zonificación" }
            ]
        },
        {
            id: 2,
            title: "Geoetiquetas PPK para drone DJI",
            category: "Software Geográfico",
            location: "Perú",
            shortDescription: "Script en Python para geoetiquetar fotos de drones DJI RTK/PPK con alta precisión, optimizando levantamientos fotogramétricos.",
            fullDescription: "Script en Python que geoetiqueta fotos de drones DJI RTK/PPK combinando la trayectoria post-procesada de RTKLIB (.pos) con las marcas de tiempo exactas y el lever arm del archivo Timestamp.MRK. Interpola la posición GNSS al instante de disparo, la traslada al sensor de la cámara y escribe el EXIF con ExifTool, generando, además, un backup de las fotografías, archivo .txt de resultados de correcciones y un archivo KML. Diseñado para levantamientos fotogramétricos para los drones DJI equipados con módulo RTK/PPK (Mavic 3 Enterprise, Phantom 4 RTK, Matrice 300/350 RTK, Mavic 3 Multispectral, etc).",
            images: [
                { url: "/ortofoto.jpg", title: "Ortofoto Resultante del Levantamiento" },
                { url: "/script-ss.jpeg", title: "Ejecución del Script en Python" },
                { url: "/resultados-script.jpg", title: "Reporte de Correcciones y Resultados" }
            ]
        },
        {
            id: 3,
            title: "Ortofoto del distrito de Ollantaytambo",
            category: "Fotogrametría y Catastro",
            location: "Perú",
            shortDescription: "Ortofoto de alta resolución para la planificación y catastro urbano. Permite vectorizar límites, zonificar áreas y delimitar fajas de seguridad.",
            fullDescription: "Esta ortofoto de alta resolución del distrito de Ollantaytambo sirve como un insumo técnico fundamental para la planificación y el catastro urbano, ya que permite vectorizar con precisión geométrica los límites de propiedad urbano (tanto el caso urbano y su crecimiento periférico) y propiedad estatal (parque arqueológico Ollantaytambo), diferenciar el suelo residencial del agrícola para la zonificación y delimitar las fajas marginales de seguridad respecto a los ríos Vilcanota y Patacancha para la prevención de riesgos. Su importancia radica en que dota a la gestión municipal de una base cartográfica real, métrica y actualizada para la toma de decisiones, resolviendo de manera directa el problema de la desactualización predial, la invasión informal sobre el patrimonio arqueológico o zonas agrícolas protegidas y la exposición de nuevas viviendas a peligros naturales por falta de ordenamiento territorial.",
            images: [
                { url: "/ortofoto-ollantaytambo.jpg", title: "Ortofoto de Alta Resolución" },
                { url: "/dem-ollantaytambo.jpg", title: "Modelo Digital de Elevación (DEM)" },
                { url: "/nube-puntos-ollantaytambo.jpg", title: "Nube de Puntos Fotogramétrica" }
            ]
        }
    ];

    return (
        <>
            <section id="projects" className="bg-white-custom py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-h3 md:text-h2 font-bold text-black-1 mb-4">
                            Proyectos Destacados
                        </h2>
                        <p className="text-body-md text-black-3">
                            Explora mis trabajos recientes en cartografía, fotogrametría y desarrollo GIS.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => {
                            const isLastOdd = projects.length % 2 !== 0 && index === projects.length - 1;
                            return (
                                <div
                                    key={project.id}
                                    className={`h-full ${isLastOdd ? "md:col-span-2 flex justify-center" : ""}`}
                                >
                                    <div
                                        onClick={() => setSelectedProject(project)}
                                        className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group flex flex-col h-full overflow-hidden w-full ${isLastOdd ? "md:max-w-[calc(50%-1rem)]" : ""
                                            }`}
                                    >
                                        <div className="pt-5 px-5">
                                            <div className="overflow-hidden rounded-lg">
                                                <img
                                                    src={project.images[0]?.url}
                                                    alt={project.title}
                                                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="mb-3">
                                                <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-body-sm font-medium">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <h3 className="text-h5 font-bold text-black-1 mb-2 group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-body-sm text-black-3 mb-3">{project.location}</p>
                                            <p className="text-body-normal text-black-3 line-clamp-2">{project.shortDescription}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
}

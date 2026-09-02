import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
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
            fullDescription: "Resuelve el desordenado crecimiento de la ciudad al establecer reglas claras sobre qué usos y actividades (residencial, comercial, industrial, protección patrimonial y ambiental) se permiten en cada zona, evitando conflictos entre usos incompatibles; protege el patrimonio histórico regulando alturas, materiales e intervenciones en el territorio diagnosticado; identifica áreas de riesgo geológico no aptas para construcción, dado el relieve andino de la región; brinda seguridad jurídica para licencias, subdivisiones de predios e inversión inmobiliaria; y orienta la inversión pública en infraestructura y servicios según la vocación de cada sector, garantizando así un desarrollo urbano ordenado, seguro y respetuoso del patrimonio cultural.",
            images: [
                { url: "/mp-fe-01-mapa-de-clasificacion-general-del-suelo-1.jpg", title: "Mapa de Clasificación General del Suelo" },
                { url: "/mp-fe-02-mapa-de-subclasificacion-de-suelo.jpg", title: "Mapa de Subclasificación de Suelo" },
                { url: "/mp-fe-03-mapa-de-zonificacion.jpg", title: "Mapa de Zonificación" }
            ]
        },
        {
            id: 2,
            title: 'Proyecto Mina Dharma',
            category: 'Análisis Geotécnico',
            location: 'Perú',
            shortDescription: 'Evaluación geotécnica detallada para operaciones mineras a cielo abierto.',
            fullDescription: 'Investigación geotécnica exhaustiva para una operación minera a cielo abierto de gran envergadura. El proyecto incluyó análisis de estabilidad de taludes, evaluación de aguas subterráneas y recomendaciones de diseño de cimentación para equipos mineros pesados.',
            images: [
                { url: 'https://images.unsplash.com/photo-1547619292-240402b5ae5d?w=800&h=600&fit=crop', title: 'Vista general de la mina' },
                { url: 'https://images.unsplash.com/photo-1579782522718-490b4d0089e9?w=800&h=600&fit=crop', title: 'Análisis de taludes' },
                { url: 'https://images.unsplash.com/photo-1582270921960-95112f45c48b?w=800&h=600&fit=crop', title: 'Muestreo de núcleos' }
            ]
        }
    ];

    return (
        <>
            <section id="projects" className="bg-white-custom py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-h3 md:text-h2 font-bold text-black-1 mb-4">
                                Trabajo de Campo Reciente
                            </h2>
                            <p className="text-body-md text-black-3">
                                Explore nuestros últimos proyectos geológicos y descubrimientos
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="hidden md:flex items-center text-primary hover:text-secondary font-medium transition-colors"
                        >
                            Ver Todos los Proyectos
                            <ArrowRight className="ml-2" size={20} />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group flex flex-col overflow-hidden"
                            >
                                <div className="pt-5 px-5">
                                    <div className="overflow-hidden rounded-lg">
                                        <img
                                            src={project.images[0].url}
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
                        ))}
                    </div>

                    <div className="md:hidden mt-8 text-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center text-primary hover:text-secondary font-medium transition-colors"
                        >
                            View All Projects
                            <ArrowRight className="ml-2" size={20} />
                        </a>
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

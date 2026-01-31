import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Estudio Mineral Acros',
            category: 'Exploración Mineral',
            location: 'Territorio del Norte, Australia',
            image: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&h=600&fit=crop',
            description: 'Estudio mineral integral que cubre 50 kilómetros cuadrados de terreno inexplorado.',
            fullDescription: 'Un proyecto integral de estudio geológico que involucró mapeo detallado y análisis de depósitos minerales en 50 kilómetros cuadrados en el Territorio del Norte. El proyecto utilizó técnicas geofísicas avanzadas y análisis geoquímico para identificar sitios mineros potenciales.',
            details: [
                'Duración: 6 meses',
                'Tamaño del equipo: 12 geólogos',
                'Tecnologías: Mapeo GIS, estudios geofísicos, muestreo de núcleos',
                'Resultado: Identificados 3 depósitos minerales de alto potencial'
            ]
        },
        {
            id: 2,
            title: 'Proyecto Mina Dharma',
            category: 'Análisis Geotécnico',
            location: 'Australia Occidental',
            image: 'https://images.unsplash.com/photo-1547619292-240402b5ae5d?w=800&h=600&fit=crop',
            description: 'Evaluación geotécnica detallada para operaciones mineras a cielo abierto.',
            fullDescription: 'Investigación geotécnica exhaustiva para una operación minera a cielo abierto de gran envergadura. El proyecto incluyó análisis de estabilidad de taludes, evaluación de aguas subterráneas y recomendaciones de diseño de cimentación para equipos mineros pesados.',
            details: [
                'Duración: 8 meses',
                'Tamaño del equipo: 15 especialistas',
                'Tecnologías: Modelado geológico 3D, análisis de estabilidad de taludes',
                'Resultado: Diseño de mina optimizado reduciendo costos en un 20%'
            ]
        },
        {
            id: 3,
            title: 'Evaluación Valle RN1',
            category: 'Impacto Ambiental',
            location: 'Queensland, Australia',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
            description: 'Evaluación de impacto ambiental para proyecto de desarrollo sostenible.',
            fullDescription: 'Evaluación integral de impacto ambiental y geológico para un desarrollo de infraestructura propuesto en una región de valle ecológicamente sensible. El estudio evaluó la estabilidad del suelo, recursos hídricos y sostenibilidad ambiental.',
            details: [
                'Duración: 4 meses',
                'Tamaño del equipo: 8 geólogos ambientales',
                'Tecnologías: Modelado ambiental, análisis de suelos, estudios hidrológicos',
                'Resultado: Proyecto aprobado con recomendaciones de desarrollo sostenible'
            ]
        }
    ];

    return (
        <>
            <section id="projects" className="bg-stone-50 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                Trabajo de Campo Reciente
                            </h2>
                            <p className="text-lg text-slate-600">
                                Explore nuestros últimos proyectos geológicos y descubrimientos
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="hidden md:flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                        >
                            Ver Todos los Proyectos
                            <ArrowRight className="ml-2" size={20} />
                        </a>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                            >
                                <div className="relative overflow-hidden">
                                    <span className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                                        {project.category}
                                    </span>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 mb-3">{project.location}</p>
                                    <p className="text-slate-600 line-clamp-2">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="md:hidden mt-8 text-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
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

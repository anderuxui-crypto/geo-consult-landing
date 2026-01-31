import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Acros Mineral Survey',
            category: 'Mineral Exploration',
            location: 'Northern Territory, Australia',
            image: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&h=600&fit=crop',
            description: 'Comprehensive mineral survey covering 50 square kilometers of unexplored terrain.',
            fullDescription: 'A comprehensive geological survey project that involved detailed mapping and analysis of mineral deposits across 50 square kilometers in the Northern Territory. The project utilized advanced geophysical techniques and geochemical analysis to identify potential mining sites.',
            details: [
                'Duration: 6 months',
                'Team size: 12 geologists',
                'Technologies: GIS mapping, geophysical surveys, core sampling',
                'Outcome: Identified 3 high-potential mineral deposits'
            ]
        },
        {
            id: 2,
            title: 'Dharma Mine Project',
            category: 'Geotechnical Analysis',
            location: 'Western Australia',
            image: 'https://images.unsplash.com/photo-1547619292-240402b5ae5d?w=800&h=600&fit=crop',
            description: 'Detailed geotechnical assessment for open-pit mining operations.',
            fullDescription: 'Extensive geotechnical investigation for a major open-pit mining operation. The project included slope stability analysis, groundwater assessment, and foundation design recommendations for heavy mining equipment.',
            details: [
                'Duration: 8 months',
                'Team size: 15 specialists',
                'Technologies: 3D geological modeling, slope stability analysis',
                'Outcome: Optimized mine design reducing costs by 20%'
            ]
        },
        {
            id: 3,
            title: 'RN1 Valley Assessment',
            category: 'Environmental Impact',
            location: 'Queensland, Australia',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
            description: 'Environmental impact assessment for sustainable development project.',
            fullDescription: 'Comprehensive environmental and geological impact assessment for a proposed infrastructure development in an ecologically sensitive valley region. The study evaluated soil stability, water resources, and environmental sustainability.',
            details: [
                'Duration: 4 months',
                'Team size: 8 environmental geologists',
                'Technologies: Environmental modeling, soil analysis, hydrology studies',
                'Outcome: Project approved with sustainable development recommendations'
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
                                Recent Fieldwork
                            </h2>
                            <p className="text-lg text-slate-600">
                                Explore our latest geological projects and discoveries
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="hidden md:flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                        >
                            View All Projects
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

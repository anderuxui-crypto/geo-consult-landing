import { Map, Compass, FileText, Layers } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: Map,
            title: 'Mapeo Geológico',
            description: 'Servicios integrales de mapeo geológico utilizando tecnología GIS avanzada y estudios de campo para proporcionar análisis precisos del subsuelo.'
        },
        {
            icon: Compass,
            title: 'Exploración Mineral',
            description: 'Servicios expertos de exploración mineral que combinan análisis geoquímico y estudios geofísicos para identificar depósitos minerales potenciales.'
        },
        {
            icon: FileText,
            title: 'Evaluación de Impacto',
            description: 'Evaluaciones exhaustivas de impacto ambiental que garantizan el cumplimiento de las regulaciones y el desarrollo sostenible de proyectos.'
        },
        {
            icon: Layers,
            title: 'Análisis Geotécnico',
            description: 'Investigaciones geotécnicas detalladas para proyectos de construcción, analizando estabilidad del suelo, requisitos de cimentación y condiciones del sitio.'
        }
    ];

    return (
        <section id="services" className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Servicios Principales
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Servicios especializados de consultoría geológica adaptados a las necesidades de su proyecto
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="bg-stone-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-emerald-200"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-emerald-600" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

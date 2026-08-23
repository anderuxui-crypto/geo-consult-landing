import { Map, Compass, FileText, Layers } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: Map,
            title: 'Elaboración de productos fotogramétricos',
            description: 'Procesamos imágenes aéreas y de drones con precisión técnica. Generamos ortofotos, modelos 3D, hipsografía y nubes de puntos georreferenciadas. Ideal para catastro, planificación urbana y/o monitoreo territorial.'
        },
        {
            icon: Compass,
            title: 'Especialistas en Sistemas de Información Geográfica',
            description: 'Diseñamos soluciones SIG adaptadas a las necesidades de tu institución. Integramos, analizamos y gestionamos información territorial estratégica. Optimizamos la toma de decisiones basadas en datos espaciales.'
        },
        {
            icon: FileText,
            title: 'Revisión, compilación y estandarización de información geoespacial',
            description: 'Depuramos y organizamos bases de datos geoespaciales dispersas. Aplicamos estándares técnicos y metadatos según normativa vigente. Garantizamos información confiable, consistente y actualizada.'
        },
        {
            icon: Layers,
            title: 'Automatización de procesos en Sistemas de Información Geográfica',
            description: 'Desarrollamos scripts y herramientas para tareas repetitivas. Reducimos tiempos operativos mediante flujos de trabajo automatizados. Aumentamos la eficiencia en el procesamiento de grandes volúmenes de datos.'
        }
    ];

    return (
        <section id="services" className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-h3 md:text-h2 font-bold text-black-1 mb-4">
                        Servicios Principales
                    </h2>
                    <p className="text-body-md text-black-3 max-w-2xl mx-auto">
                        Servicios especializados de consultoría geológica adaptados a las necesidades de su proyecto
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white-custom p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-primary/30"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-h5 font-bold text-black-1 mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-body-normal text-black-3">
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

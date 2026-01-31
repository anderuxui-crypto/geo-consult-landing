import { Map, Compass, FileText, Layers } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: Map,
            title: 'Geological Mapping',
            description: 'Comprehensive geological mapping services using advanced GIS technology and field surveys to provide accurate subsurface analysis.'
        },
        {
            icon: Compass,
            title: 'Mineral Exploration',
            description: 'Expert mineral exploration services combining geochemical analysis and geophysical surveys to identify potential mineral deposits.'
        },
        {
            icon: FileText,
            title: 'Impact Assessment',
            description: 'Thorough environmental impact assessments ensuring compliance with regulations and sustainable project development.'
        },
        {
            icon: Layers,
            title: 'Geotechnical Analysis',
            description: 'Detailed geotechnical investigations for construction projects, analyzing soil stability, foundation requirements, and site conditions.'
        }
    ];

    return (
        <section id="services" className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Core Services
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Specialized geological consulting services tailored to your project needs
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

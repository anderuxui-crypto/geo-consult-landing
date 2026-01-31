import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    const contactInfo = [
        {
            icon: Mail,
            label: 'Envíanos un Email',
            value: 'contact@geoconsult.com',
            href: 'mailto:contact@geoconsult.com'
        },
        {
            icon: Phone,
            label: 'Llámanos',
            value: '+1 (555) 123-4567',
            href: 'tel:+15551234567'
        },
        {
            icon: MapPin,
            label: 'Ubicación',
            value: 'Perth, Australia Occidental',
            href: '#'
        }
    ];

    const services = [
        'Mapeo Geológico',
        'Exploración Mineral',
        'Evaluación de Impacto',
        'Análisis Geotécnico',
        'Consultoría Ambiental',
        'Otro'
    ];

    return (
        <section id="contact" className="bg-stone-50 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Hablemos de su Próximo{' '}
                        <span className="text-emerald-600">Proyecto Geológico</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Consultas para asesoría de servicios o para comenzar a analizar y encontrar
                        soluciones efectivas para sus necesidades geológicas
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">
                            Póngase en Contacto
                        </h3>
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <a
                                    key={index}
                                    href={info.href}
                                    className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200 group"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-200">
                                            <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-200" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-500 font-medium">{info.label}</div>
                                        <div className="text-slate-900 font-semibold">{info.value}</div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                                        placeholder="Su nombre"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                                        placeholder="su@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                                        Servicio Requerido
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors bg-white"
                                    >
                                        <option value="">Seleccione un servicio</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors resize-none"
                                    placeholder="Cuéntenos sobre su proyecto..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium text-lg"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

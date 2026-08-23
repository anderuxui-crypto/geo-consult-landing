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
            label: 'Llámame',
            value: '+51 993044317',
            href: 'tel:+15551234567'
        },
        {
            icon: MapPin,
            label: 'Ubicación',
            value: 'Lima, Perú',
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
        <section id="contact" className="bg-white-custom py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-h3 md:text-h2 font-bold text-black-1 mb-4">
                        Hablemos de su Próximo{' '}
                        <span className="text-primary">Proyecto Geológico</span>
                    </h2>
                    <p className="text-body-md text-black-3 max-w-2xl mx-auto">
                        Consultas para asesoría de servicios o para comenzar a analizar y encontrar
                        soluciones efectivas para sus necesidades geológicas
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-h5 font-bold text-black-1 mb-6">
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
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                                            <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-200" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-body-sm text-black-3 font-medium">{info.label}</div>
                                        <div className="text-body-normal text-black-1 font-semibold">{info.value}</div>
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
                                    <label htmlFor="name" className="block text-body-sm font-medium text-black-2 mb-2">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 border border-black-3/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                                        placeholder="Su nombre"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-body-sm font-medium text-black-2 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-black-3/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                                        placeholder="su@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-body-sm font-medium text-black-2 mb-2">
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 border border-black-3/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="service" className="block text-body-sm font-medium text-black-2 mb-2">
                                        Servicio Requerido
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        className="w-full px-4 py-3 border border-black-3/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-white"
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
                                <label htmlFor="message" className="block text-body-sm font-medium text-black-2 mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="w-full px-4 py-3 border border-black-3/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                                    placeholder="Cuéntenos sobre su proyecto..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white px-8 py-4 rounded-lg hover:bg-secondary transition-colors duration-200 font-medium text-body-md"
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

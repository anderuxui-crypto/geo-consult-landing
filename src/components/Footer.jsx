import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'Nosotros', href: '#about' },
            { name: 'Servicios', href: '#services' },
            { name: 'Proyectos', href: '#projects' },
            { name: 'Contacto', href: '#contact' }
        ],
        services: [
            { name: 'Mapeo Geológico', href: '#services' },
            { name: 'Exploración Mineral', href: '#services' },
            { name: 'Evaluación de Impacto', href: '#services' },
            { name: 'Análisis Geotécnico', href: '#services' }
        ],
        legal: [
            { name: 'Política de Privacidad', href: '#' },
            { name: 'Términos de Servicio', href: '#' },
            { name: 'Política de Cookies', href: '#' }
        ]
    };

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/rjjosgunmsm/', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' }
    ];

    return (
        <footer className="bg-black-1 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="text-h5 font-bold mb-4">
                            Geo<span className="text-primary">Consult</span>
                        </div>
                        <p className="text-white-custom/70 mb-6 text-body-normal">
                            Servicios expertos de consultoría geológica para soluciones sostenibles e innovadoras.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 bg-black-2 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-bold text-body-md mb-4 text-white">Empresa</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-white-custom/70 hover:text-primary text-body-normal transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="font-bold text-body-md mb-4 text-white">Servicios</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-white-custom/70 hover:text-primary text-body-normal transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-bold text-body-md mb-4 text-white">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-white-custom/70 hover:text-primary text-body-normal transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-black-2 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-white-custom/60 text-body-sm">
                            © {currentYear} GeoConsult. Todos los derechos reservados.
                        </p>
                        <p className="text-white-custom/60 text-body-sm">
                            Diseñado con precisión y experiencia
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

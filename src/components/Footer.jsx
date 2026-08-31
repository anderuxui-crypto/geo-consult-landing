import { Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#111827] pt-20 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="text-center mb-16">
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
                        ¿Listo para optimizar los datos territoriales de tu proyecto?
                    </h2>
                    <div className="flex items-center justify-center space-x-2">
                        <Mail className="w-5 h-5 text-primary" />
                        <a href="mailto:contacto@geoconsult.com" className="text-white hover:text-primary transition-colors text-lg font-medium">
                            contacto@geoconsult.com
                        </a>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="border-t border-[#1f2937] pt-10 pb-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                    {/* Brand */}
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg leading-none">RJ</span>
                        </div>
                        <span className="text-white font-bold text-lg">Ronald Orellana</span>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
                        <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Inicio</a>
                        <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Servicios</a>
                        <a href="#technology" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Tecnología</a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Proyectos</a>
                        <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Testimonios</a>
                    </nav>

                    {/* Socials */}
                    <div className="flex items-center space-x-5">
                        <a href="https://www.linkedin.com/in/rjjosgunmsm/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-[#1f2937] pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                    <p>© 2026 Ronald Orellana. Todos los derechos reservados.</p>
                    <p className="mt-2 md:mt-0">Diseñado con precisión y experiencia</p>
                </div>
            </div>
        </footer>
    );
}

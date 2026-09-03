import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCVModalOpen, setIsCVModalOpen] = useState(false);

    const navLinks = [
        { name: 'Servicios', href: '#services' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Tecnología', href: '#technology' },
    ];

    return (
        <>
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <span className="text-h5 font-bold text-black-1">
                                Ronald Orellana<span className="text-primary"> | Geógrafo</span>
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-body-normal font-medium text-black-2 hover:text-primary transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={() => setIsCVModalOpen(true)}
                                className="text-body-normal font-medium text-black-2 hover:text-primary transition-colors duration-200"
                            >
                                Mi CV
                            </button>
                            <a
                                href="#contact"
                                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-colors duration-200"
                            >
                                Contáctame
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-black-2 hover:text-primary"
                                aria-label="Abrir menú"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-white-custom">
                        <div className="px-4 pt-2 pb-4 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block px-3 py-2 text-body-normal text-black-2 hover:text-primary hover:bg-white-custom rounded-md transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={() => { setIsCVModalOpen(true); setIsMenuOpen(false); }}
                                className="block w-full text-left px-3 py-2 text-body-normal text-black-2 hover:text-primary hover:bg-white-custom rounded-md transition-colors duration-200"
                            >
                                Mi CV
                            </button>
                            <a
                                href="#contact"
                                className="block bg-primary text-white px-3 py-2 rounded-md hover:bg-secondary transition-colors duration-200 text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contáctame
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* CV Modal */}
            {isCVModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
                    onClick={() => setIsCVModalOpen(false)}
                >
                    <div
                        className="w-full max-w-4xl bg-white rounded-xl overflow-hidden flex flex-col shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex justify-between items-center px-6 py-4 border-b border-white-custom">
                            <h3 className="text-h5 font-bold text-black-1">Currículum Vitae</h3>
                            <button
                                onClick={() => setIsCVModalOpen(false)}
                                className="text-black-3 hover:text-black-2 transition-colors p-1 rounded-lg hover:bg-gray-100"
                                aria-label="Cerrar modal"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* PDF Viewer */}
                        <iframe
                            src="/cv-ronald-orellana-simple.pdf"
                            className="w-full h-[60vh] md:h-[75vh] border-0"
                            title="CV Ronald Orellana"
                        />

                        {/* Modal Footer */}
                        <div className="flex justify-center p-4 border-t border-white-custom">
                            <a
                                href="/cv-ronald-orellana-simple.pdf"
                                download="CV_Ronald_Orellana.pdf"
                                className="bg-primary text-white px-6 py-2 rounded-md font-bold hover:bg-secondary transition-colors duration-200"
                            >
                                Descargar PDF
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

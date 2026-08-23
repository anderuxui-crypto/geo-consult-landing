import heroImage from '../assets/geologo-portada.png';

export default function Hero() {
    return (
        <section id="about" className="bg-gradient-to-br from-white to-white-custom py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h1 className="text-h3 md:text-h2 lg:text-h1 font-bold text-black-1">
                            Geógrafo aportando conocimiento para{' '}
                            <span className="text-primary">el desarrollo territorial</span>
                        </h1>
                        <p className="text-body-md text-black-3">
                            "Más de 10 años de experiencia transformando datos geoespaciales en soluciones estratégicas para el sector público y privado. Optimizamos la planificación territorial y urbana integrando Fotogrametría, Catastro e Inteligencia Artificial para resultados rápidos y precisos."
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="bg-primary text-white px-8 py-3 rounded-md hover:bg-secondary transition-colors duration-200 text-center font-medium"
                            >
                                Contáctanos
                            </a>
                            <a
                                href="#services"
                                className="border-2 border-primary text-primary px-8 py-3 rounded-md hover:bg-white-custom transition-colors duration-200 text-center font-medium"
                            >
                                Nuestros Servicios
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={heroImage}
                                alt="Geólogo profesional examinando muestras de rocas"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-20 blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}


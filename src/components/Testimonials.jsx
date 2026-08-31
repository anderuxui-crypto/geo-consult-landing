import { Star } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            text: "Profesional excepcional y pieza clave en el análisis SIG. Su dominio técnico y resolución de problemas bajo presión garantizaron el éxito de nuestro proyecto de planificación territorial.",
            author: "Jose Manuel Huilca",
            position: "Coordinador General, Proyecto de Desarrollo Metropolitano del Cusco",
            initial: "J"
        },
        {
            text: "Especialista GIS con gran solidez técnica. Su experiencia en análisis geoespacial y cartografía contribuyó significativamente a la creación de productos técnicos de máxima calidad.",
            author: "Ing. Oscar Felipe Obando",
            position: "Director de Hidrología, SENAMHI",
            initial: "O"
        },
        {
            text: "Destacó por su alta capacidad técnica y compromiso en el desarrollo cartográfico del Precenso 2025. Un profesional proactivo y enfocado en alcanzar los objetivos institucionales.",
            author: "Joysi Lock",
            position: "Coordinadora de Cartografía, INEI",
            initial: "J"
        }
    ];

    return (
        <section id="testimonials" className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-h2 text-black-1 font-bold mb-4">
                        Testimonios
                    </h2>
                    <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
                    <p className="text-body-normal text-black-3 max-w-2xl mx-auto">
                        Lo que dicen los expertos y líderes del sector sobre mi trabajo.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="bg-slate-900 rounded-2xl p-8 shadow-xl flex flex-col h-full"
                        >
                            {/* Stars */}
                            <div className="flex mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1" 
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="flex-grow mb-8">
                                <p className="text-white-custom text-body-sm italic leading-relaxed">
                                    "{testimonial.text}"
                                </p>
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center space-x-4 mt-auto">
                                <div className="shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                                    {testimonial.initial}
                                </div>
                                <div className="text-left">
                                    <div className="text-white font-bold text-body-sm">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-white-custom/70 text-[12px] mt-1 leading-snug">
                                        {testimonial.position}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

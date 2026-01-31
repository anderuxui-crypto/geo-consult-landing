import { Star } from 'lucide-react';

export default function Testimonials() {
    const testimonial = {
        text: "Un activo indispensable para nuestro equipo de exploración. La precisión del mapeo y el cumplimiento de los protocolos de seguridad fueron sobresalientes. Su experiencia contribuyó significativamente al éxito de nuestro proyecto.",
        author: "James Okaland",
        position: "Gerente de Exploración",
        company: "MineralCorp International",
        rating: 5
    };

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 shadow-2xl">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, index) => (
                            <Star
                                key={index}
                                className="w-6 h-6 text-yellow-400 fill-yellow-400"
                            />
                        ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-center mb-8">
                        <p className="text-xl md:text-2xl text-white leading-relaxed italic">
                            "{testimonial.text}"
                        </p>
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center space-x-4">
                        <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">
                                {testimonial.author.charAt(0)}
                            </span>
                        </div>
                        <div className="text-left">
                            <div className="text-white font-bold">{testimonial.author}</div>
                            <div className="text-slate-300 text-sm">
                                {testimonial.position}, {testimonial.company}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

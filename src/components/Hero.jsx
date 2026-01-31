export default function Hero() {
    return (
        <section className="bg-gradient-to-br from-stone-50 to-emerald-50 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                            Unearthing Solutions through{' '}
                            <span className="text-emerald-600">Geological Science</span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Providing expert geological consulting services for the mining,
                            construction, and environmental sectors. Our team delivers precise
                            analysis and sustainable solutions for all your geological needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="bg-emerald-600 text-white px-8 py-3 rounded-md hover:bg-emerald-700 transition-colors duration-200 text-center font-medium"
                            >
                                Contact Us
                            </a>
                            <a
                                href="#services"
                                className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-md hover:bg-emerald-50 transition-colors duration-200 text-center font-medium"
                            >
                                Our Services
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop"
                                alt="Professional geologist examining rock samples"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-600 rounded-full opacity-20 blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

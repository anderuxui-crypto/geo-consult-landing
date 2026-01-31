export default function Stats() {
    const stats = [
        { value: '15+', label: 'Años de Experiencia' },
        { value: '50+', label: 'Proyectos Entregados' },
        { value: '100%', label: 'Satisfacción del Cliente' }
    ];

    return (
        <section className="bg-white py-12 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-emerald-600">
                                {stat.value}
                            </div>
                            <div className="text-slate-600 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

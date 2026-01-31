export default function TrustedBy() {
    const companies = [
        'ArcGIS',
        'QGIS',
        'AutoCAD',
        'MICROMINE',
        'Leapfrog'
    ];

    return (
        <section className="bg-stone-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-slate-500 text-sm font-semibold uppercase tracking-wider mb-8">
                    Trusted by Industry Leaders
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="text-slate-400 text-xl md:text-2xl font-bold hover:text-emerald-600 transition-colors duration-200"
                        >
                            {company}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

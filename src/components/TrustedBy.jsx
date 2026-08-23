export default function TrustedBy() {
    const companies = [
        'ArcGIS',
        'QGIS',
        'AutoCAD',
        'MICROMINE',
        'Leapfrog'
    ];

    return (
        <section className="bg-white-custom py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-black-3 text-body-sm font-semibold uppercase tracking-wider mb-8">
                    Confianza de Líderes de la Industria
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="text-black-3/60 text-body-lg md:text-h5 font-bold hover:text-primary transition-colors duration-200"
                        >
                            {company}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

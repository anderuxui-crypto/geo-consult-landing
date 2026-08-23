import { X } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <div className="sticky top-0 bg-white border-b border-white-custom p-4 flex justify-between items-center">
                    <h3 className="text-h5 font-bold text-black-1">{project.title}</h3>
                    <button
                        onClick={onClose}
                        className="text-black-3 hover:text-black-2 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Image */}
                    <div className="rounded-xl overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Details */}
                    <div className="space-y-4">
                        <div>
                            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-body-sm font-medium">
                                {project.category}
                            </span>
                        </div>

                        <div>
                            <h4 className="text-body-sm font-semibold text-black-3 uppercase tracking-wider mb-2">
                                Ubicación
                            </h4>
                            <p className="text-body-normal text-black-1">{project.location}</p>
                        </div>

                        <div>
                            <h4 className="text-body-sm font-semibold text-black-3 uppercase tracking-wider mb-2">
                                Descripción
                            </h4>
                            <p className="text-body-normal text-black-3">{project.fullDescription}</p>
                        </div>

                        {project.details && (
                            <div>
                                <h4 className="text-body-sm font-semibold text-black-3 uppercase tracking-wider mb-2">
                                    Detalles del Proyecto
                                </h4>
                                <ul className="space-y-2">
                                    {project.details.map((detail, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-primary mr-2">•</span>
                                            <span className="text-body-normal text-black-3">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

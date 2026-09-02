import { X } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <div className="sticky top-0 bg-white border-b border-white-custom pt-8 pb-3 px-8 flex justify-between items-start gap-6 z-10">
                    <h3 className="text-h5 font-bold text-black-1 flex-1 pr-2">{project.title}</h3>
                    <button
                        onClick={onClose}
                        className="text-black-3 hover:text-black-2 transition-colors p-1 rounded-lg hover:bg-gray-100 shrink-0"
                        aria-label="Cerrar modal"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="px-8 pb-8 pt-4 space-y-6">
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


                    </div>

                    {/* Image Gallery */}
                    {project.images && project.images.length > 0 && (
                        <div className="flex flex-col gap-6 mt-6">
                            {project.images.map((imgObj, index) => (
                                <div key={index} className="flex flex-col mb-6">
                                    <h5 className="text-sm font-semibold text-slate-800 mb-2">
                                        {imgObj.title}
                                    </h5>
                                    <img
                                        src={encodeURI(imgObj.url)}
                                        alt={imgObj.title}
                                        className="w-full h-auto object-contain rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

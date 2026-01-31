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
                <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-600 transition-colors"
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
                            <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                                {project.category}
                            </span>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                Location
                            </h4>
                            <p className="text-slate-900">{project.location}</p>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                Description
                            </h4>
                            <p className="text-slate-600 leading-relaxed">{project.fullDescription}</p>
                        </div>

                        {project.details && (
                            <div>
                                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                    Project Details
                                </h4>
                                <ul className="space-y-2">
                                    {project.details.map((detail, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-emerald-600 mr-2">•</span>
                                            <span className="text-slate-600">{detail}</span>
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

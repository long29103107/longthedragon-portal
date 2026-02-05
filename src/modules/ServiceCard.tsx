import { ServiceCard as ServiceCardType } from '@/types/service';

interface ServiceCardProps {
  service: ServiceCardType;
  showDescription?: boolean;
}

export function ServiceCard({ service, showDescription = false }: ServiceCardProps) {
  return (
    <a
      href={service.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 group"
    >
      {!showDescription ? (
        // Simple card layout for bookmarks
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="text-4xl">{service.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                {service.title}
              </h3>
              <p className="text-sm text-blue-500 mt-1">
                Url: {service.url}
              </p>
            </div>
          </div>
          <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      ) : (
        // Detailed card layout with description
        <>
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-4">
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                {service.title}
              </h3>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
          {service.description && (
            <p className="text-gray-600 mb-3">{service.description}</p>
          )}
          <div className="flex gap-4 text-sm">
            <span className="text-blue-500">Url: {service.url}</span>
            {service.port && (
              <span className="text-yellow-500">Port: {service.port}</span>
            )}
          </div>
        </>
      )}
    </a>
  );
}

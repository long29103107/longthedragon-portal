import { useState } from "react";
import type { ServiceCardType } from "@/types/service";

interface ServiceCardProps {
  service: ServiceCardType;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(service.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg p-[2px] bg-transparent hover:bg-gradient-to-r hover:from-green-300/100 hover:to-yellow-300/100 transition-all duration-300">
      <a
        href={service.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-10 flex flex-col h-full block"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="text-4xl">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600">
              {service.title}
            </h3>
          </div>
          <svg
            className="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>

        <div className="flex-1 mb-4">
          <p className="text-gray-600">
            {service.description || service.title}
          </p>
        </div>

        <div className="flex gap-4 text-lg items-center mt-auto">
          <button
            onClick={handleCopyUrl}
            className="text-blue-500 hover:text-blue-700 flex items-center gap-1 transition-colors group/copy"
            title="Click to copy URL"
          >
            <span>{service.url}</span>
            <svg
              className="w-4 h-4 opacity-0 group-hover/copy:opacity-100 transition-opacity cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {copied ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              )}
            </svg>
            {copied && <span className="text-green-600 text-xs">Copied!</span>}
          </button>
          {service.port && (
            <span className="text-yellow-500 flex justify-end gap-1">
              Port: {service.port}
            </span>
          )}
        </div>
      </a>
    </div>
  );
}

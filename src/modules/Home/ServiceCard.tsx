import { useState } from "react";
import { Button } from "@/components";
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
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-10 flex flex-col h-full block"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="text-4xl">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {service.title}
            </h3>
          </div>
          <svg
            className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0"
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
          <p className="text-gray-600 dark:text-gray-300">
            {service.description || service.title}
          </p>
        </div>

        <div className="flex justify-between gap-4 text-lg items-center mt-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopyUrl}
            className="!p-0 !text-blue-500 dark:!text-blue-400 hover:!text-blue-700 dark:hover:!text-blue-300 text-lg h-auto group/copy"
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
          </Button>
          {service.port && (
            <span className="text-yellow-500 font-medium whitespace-nowrap">
              Port: {service.port}
            </span>
          )}
        </div>
      </a>
    </div>
  );
}

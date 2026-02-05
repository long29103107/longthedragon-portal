import { useState } from "react";
import { Button } from "@/components";
import type { ServiceCardType } from "@/types/service";

/** Default fake repo on GitHub domain when service has no repo */
function getDefaultRepoUrl(service: ServiceCardType): string {
  const slug = service.title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return `https://github.com/example/${slug || "repo"}`;
}

interface ServiceCardProps {
  service: ServiceCardType;
}

const defaultIconRepo = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export function ServiceCard({ service }: ServiceCardProps) {
  const [copied, setCopied] = useState(false);
  const repoUrl = service.repoUrl ?? service.repo ?? getDefaultRepoUrl(service);
  const repoIcon =
    service.iconRepo != null ? (
      <span className="text-lg leading-none">{service.iconRepo}</span>
    ) : (
      defaultIconRepo
    );

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
            className="w-8 h-8 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0"
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

        <div className="flex justify-between gap-4 text-lg items-center mt-auto flex-wrap">
          <div className="flex items-center gap-3 flex-wrap">
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
              {copied && (
                <span className="text-green-600 text-xs">Copied!</span>
              )}
            </Button>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(repoUrl, "_blank", "noopener,noreferrer");
            }}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap bg-transparent border-0 cursor-pointer p-0"
            title="Open repository"
          >
            {repoIcon}
          </button>
        </div>
      </a>
    </div>
  );
}

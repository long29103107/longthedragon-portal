import type { ServiceCardType } from "@/types/service";
import { ServiceCard } from "./ServiceCard";

interface ServiceSectionProps {
  title: string;
  services: ServiceCardType[];
  isCollapsed?: boolean;
  onToggle?: () => void;
}

export function ServiceSection({
  title,
  services,
  isCollapsed = false,
  onToggle,
}: ServiceSectionProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          {title} <span className="text-gray-500">({services.length})</span>
        </h2>
        {onToggle && (
          <button
            onClick={onToggle}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            title={isCollapsed ? "Expand section" : "Collapse section"}
          >
            <svg
              className={`w-5 h-5 transition-transform ease-in-out duration-300 ${
                isCollapsed ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        )}
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all ease-in-out duration-300 overflow-hidden ${
          isCollapsed ? "max-h-0 opacity-0" : "max-h-[10000px] opacity-100"
        }`}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}

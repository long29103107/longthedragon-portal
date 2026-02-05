import { Button } from "@/components";
import type { ServiceCardType } from "@/types/service"; 
import { ServiceCard } from "./ServiceCard";

interface ServiceSectionProps {
  title: string;
  services: ServiceCardType[];
  isCollapsed?: boolean;
  onToggle?: () => void;
}

const ServiceSection = ({
  title,
  services,
  isCollapsed = false,
  onToggle,
}: ServiceSectionProps) => {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          {title}{" "}
          <span className="text-gray-500 dark:text-gray-400">
            ({services.length})
          </span>
        </h2>
        {onToggle && (
          <Button
            variant="secondary"
            size="sm"
            onClick={onToggle}
            title={isCollapsed ? "Expand section" : "Collapse section"}
            leftIcon={
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
            }
          />
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
};

export default ServiceSection;

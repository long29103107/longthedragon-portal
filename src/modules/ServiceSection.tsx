import { ServiceCard as ServiceCardType } from '@/types/service';
import { ServiceCard } from '@/modules/ServiceCard';

interface ServiceSectionProps {
  title: string;
  services: ServiceCardType[];
  showDescription?: boolean;
}

export function ServiceSection({ title, services, showDescription = false }: ServiceSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} showDescription={showDescription} />
        ))}
      </div>
    </section>
  );
}

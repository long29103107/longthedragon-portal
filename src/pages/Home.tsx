import type { ServiceCard } from '@/types/service';
import { Header } from '@/modules/Header';
import { ServiceSection } from '@/modules/ServiceSection';

const Home = () => {
  const sections = [
    {
      title: 'Bookmark',
      showDescription: false,
      services: [
        {
          title: 'Ghost | Wiki',
          url: 'https://blogic.space',
          icon: '📝'
        },
        {
          title: 'Jira | Project management',
          url: 'https://blogicsystems.atlassian.net/',
          icon: '🔷'
        }
      ] as ServiceCard[]
    },
    {
      title: 'BLogic Admin',
      showDescription: true,
      services: [
        {
          title: 'Blogic Dashboard',
          description: 'Manage applications, tickets, and more with ease.',
          url: 'http://192.168.1.194:9700',
          port: '9700',
          icon: '📊'
        },
        {
          title: 'BLogic Licenses',
          description: 'Manage licenses for all applications within the BLogic ecosystem',
          url: 'http://192.168.1.194:3200',
          port: '9220',
          icon: '🏆'
        }
      ] as ServiceCard[]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header environment="staging" />
      
      <div className="max-w-7xl mx-auto px-8 pb-16">
        {sections.map((section, index) => (
          <ServiceSection 
            key={index}
            title={section.title} 
            services={section.services} 
            showDescription={section.showDescription} 
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
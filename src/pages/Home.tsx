import { Header } from "@/modules/Header";
import { ServiceSection } from "@/modules/ServiceSection";
import { ServiceCardSkeleton } from "@/modules/ServiceCardSkeleton";
import { usePortalStore } from "@/store";
import { useServiceSearch } from "@/hooks";

const Home = () => {
  const { sections } = usePortalStore();
  const {
    searchTerm,
    setSearchTerm,
    debouncedSearchTerm,
    filteredSections,
    clearSearch,
  } = useServiceSearch(sections, 500);

  const isSearching = searchTerm !== debouncedSearchTerm;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <div className="max-w-8xl mx-auto px-8 pb-16">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-3xl mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search services by name, description, URL, or port..."
              className="w-full px-6 py-4 pr-12 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-lg"
            />
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-12 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 hover:text-gray-600"
                title="Clear search"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Sections */}
        {isSearching ? (
          <div className="mb-12">
            <div className="h-8 bg-gray-200 rounded w-48 mb-6 animate-pulse"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ServiceCardSkeleton />
              <ServiceCardSkeleton />
              <ServiceCardSkeleton />
              <ServiceCardSkeleton />
            </div>
          </div>
        ) : filteredSections.length > 0 ? (
          filteredSections.map((section, index) => (
            <ServiceSection
              key={index}
              title={section.title}
              services={section.services}
            />
          ))
        ) : (
          <div className="text-center py-16">
            <svg
              className="mx-auto w-16 h-16 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No services found
            </h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

import { useState } from "react";
import { Link } from "react-router";
import Header from "../modules/Header";
import ServiceSection from "../modules/ServiceSection";
import ServiceCardSkeleton from "@/modules/ServiceCardSkeleton";
import { Input } from "@/components";
import { usePortalStore } from "@/store";
import { useServiceSearch, useTheme } from "@/hooks";

const Home = () => {
  const { sections } = usePortalStore();
  const {
    searchTerm,
    setSearchTerm,
    debouncedSearchTerm,
    filteredSections,
    totalResults,
    clearSearch,
  } = useServiceSearch(sections);
  const isSearching = searchTerm !== debouncedSearchTerm;
  const { theme, toggleTheme } = useTheme();
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(
    new Set()
  );

  const toggleSection = (sectionTitle: string) => {
    setCollapsedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(sectionTitle)) {
        newSet.delete(sectionTitle);
      } else {
        newSet.add(sectionTitle);
      }
      return newSet;
    });
  };

  const expandAll = () => setCollapsedSections(new Set());
  const collapseAll = () =>
    setCollapsedSections(new Set(filteredSections.map((s) => s.title)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-8xl mx-auto px-8 pt-6 flex justify-end">
        <Link
          to="/login"
          className="px-5 py-2.5 text-sm font-medium text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300 flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          Login
        </Link>
      </div>
      <Header />

      <div className="max-w-8xl mx-auto px-8 pb-16">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-3xl mx-auto">
            <Input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search services by name, description, URL, or port..."
              className="text-lg py-4"
              rightIcon={
                <div className="flex items-center gap-2">
                  {searchTerm && (
                    <button
                      onClick={clearSearch}
                      className="w-6 h-6 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      title="Clear search"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                  <svg
                    className="w-6 h-6"
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
                </div>
              }
            />
          </div>{" "}
          <p className="text-center mt-2 text-gray-600 dark:text-gray-300">
            {debouncedSearchTerm ? `Found ${totalResults} service(s)` : ""}
          </p>
        </div>

        {/* Controls: Expand/Collapse All and Toggle Theme */}
        {!isSearching && filteredSections.length > 0 && (
          <div className="flex justify-end items-center gap-2 mb-6">
            <button
              onClick={expandAll}
              className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
            >
              Collapse All
            </button>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2"></div>
            <div className="relative rounded-lg p-[2px] bg-gradient-to-r from-green-300/100 to-yellow-300/100 transition-all duration-300">
              <button
                onClick={toggleTheme}
                className="px-5 py-2.5 text-sm font-semibold text-gray-800 dark:text-black bg-gradient 
                hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 w-full"
                title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                {theme === "light" ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
                {theme === "light" ? "Dark" : "Light"} Mode
              </button>
            </div>
          </div>
        )}

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
              isCollapsed={collapsedSections.has(section.title)}
              onToggle={() => toggleSection(section.title)}
            />
          ))
        ) : (
          <div className="text-center py-16">
            <svg
              className="mx-auto w-16 h-16 text-gray-400 dark:text-gray-500 mb-4"
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
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
              No services found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search terms
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

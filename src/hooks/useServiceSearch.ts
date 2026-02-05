import { useState, useMemo } from "react";
import { useDebounce } from "./useDebounce";
import type { SectionType } from "@/types";

export function useServiceSearch(sections: SectionType[], delay: number = 300) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, delay);

  const filteredSections = useMemo(() => {
    if (!debouncedSearchTerm) return sections;

    const keyword = debouncedSearchTerm.toLowerCase();

    return sections
      .map((section) => {
        // Check if section title matches
        const sectionTitleMatches = section.title
          .toLowerCase()
          .includes(keyword);

        // If section title matches, return all services
        if (sectionTitleMatches) {
          return section;
        }

        // Otherwise, filter services by keyword
        return {
          ...section,
          services: section.services.filter(
            (service) =>
              service.title.toLowerCase().includes(keyword) ||
              service.description?.toLowerCase().includes(keyword) ||
              service.url.toLowerCase().includes(keyword)
          ),
        };
      })
      .filter((section) => section.services.length > 0);
  }, [sections, debouncedSearchTerm]);

  const totalResults = filteredSections.reduce(
    (acc, section) => acc + section.services.length,
    0
  );

  const clearSearch = () => setSearchTerm("");

  return {
    searchTerm,
    setSearchTerm,
    debouncedSearchTerm,
    filteredSections,
    totalResults,
    clearSearch,
  };
}

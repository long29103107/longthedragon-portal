import { create } from 'zustand';
import type { SectionType } from '@/types';
import sectionsData from '@/database/sections.json';

interface PortalState {
  sections: SectionType[];
  loadSections: () => void;
}

export const usePortalStore = create<PortalState>((set) => ({
  sections: sectionsData as SectionType[],

  loadSections: () => set({ sections: sectionsData as SectionType[] })
}));

import { create } from "zustand";

interface UIStore {
  isMounted: boolean;
  setMounted: (status: boolean) => void;
  
  isMenuOpen: boolean;
  toggleMenu: () => void;
  setMenuOpen: (isOpen: boolean) => void;
  
  loadingProgress: number;
  setLoadingProgress: (progress: number) => void;
}

export const useStore = create<UIStore>((set) => ({
  isMounted: false,
  setMounted: (status) => set({ isMounted: status }),
  
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
  
  loadingProgress: 0,
  setLoadingProgress: (progress) => set({ loadingProgress: progress }),
}));

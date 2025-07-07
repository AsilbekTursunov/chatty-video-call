import { create } from 'zustand';

const useThemeStore = create((set) => ({
  theme: localStorage.getItem('chatty-theme') || 'forest', // Default theme
  setTheme: (newTheme) => {
    set({ theme: newTheme });
    localStorage.setItem('chatty-theme', newTheme);
  },
}));

export default useThemeStore;
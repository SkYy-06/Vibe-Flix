import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("vibeflix-theme") || "night",
  setTheme: (theme) => {
    localStorage.setItem("vibeflix-theme", theme);

    set({ theme });
  },
}));

import { create } from "zustand";


type State = {
  pathTheme: string;
};

type Actions = {
  actions: {
    setPathTheme: (pathTheme: string) => void;
  };
};

const useThemeStore = create<State & Actions>((set) => ({
  pathTheme: "",
  actions: {
    setPathTheme: (pathTheme: string) =>
      set((state) => ({
        ...state,
        pathTheme,
      })),
  },
}));

export const usePathTheme = () => useThemeStore((state) => state.pathTheme);
export const usePathThemeActions = () => useThemeStore((state) => state.actions);

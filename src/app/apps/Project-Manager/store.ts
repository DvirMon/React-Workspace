import { create } from "zustand";
import { Project } from "./types";

interface State {
  projects: Project[];
}

export const useProjectStore = create<State>((set) => ({
  projects: [],
  addProject: (newProject: Project) => set((state) => addProject(state, newProject)),
}));

const addProject = (state: State, newProject: Project): State => ({
  ...state,
  projects: [...state.projects, { ...newProject }],
});

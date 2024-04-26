import { create } from "zustand";
import { Project } from "./types";

type State = {
  projects: Project[];
};

type Action = {
  addProject: (newProject: Project) => void;
};

export const useProjectStore = create<State & Action>((set) => ({
  projects: [],
  addProject: (newProject: Project) =>
    set((state) => addProject(state, newProject)),
}));

const addProject = (state: State, newProject: Project): State => ({
  ...state,
  projects: [...state.projects, { ...newProject }],
});

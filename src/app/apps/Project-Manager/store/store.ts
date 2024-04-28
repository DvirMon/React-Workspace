import { create } from "zustand";
import { Project, Task } from "../util/types";
import {
  addProject,
  addTaskToProject,
  deleteProject,
  deleteTaskFromProject,
  getCurrentProject,
} from "./store-helpers";
import { PROJECTS } from "../util/data";

export type State = {
  projects: Project[];
  selectedId: string;
};

type Action = {
  actions: {
    addProject: (newProject: Project) => void;
    addTaskToProject: (project: Project, newTask: Task) => void;
    deleteTaskFromProject: (project: Project, indexToDelete: number) => void;
    deleteProject: (id: string) => void;
  };
};

const useProjectStore = create<State & Action>((set) => ({
  projects: [
   ...PROJECTS
  ],
  selectedId: "",
  actions: {
    addProject: (newProject: Project) =>
      set((state) => addProject(state, newProject)),

    addTaskToProject: (project: Project, newTask: Task) =>
      set((state) => addTaskToProject(state, project, newTask)),

    deleteTaskFromProject: (project: Project, indexToDelete: number) =>
      set((state) => deleteTaskFromProject(state, project, indexToDelete)),

    deleteProject: (id: string) => set((state) => deleteProject(state, id)),
  },
}));

export const useProjects = () => useProjectStore((state) => state.projects);

export const useHasProjects = () =>
  useProjectStore((state) => state.projects.length > 0);

export const useDisplayProject = () =>
  useProjectStore((state) =>
    getCurrentProject(state.projects, state.selectedId)
  ) as Project;

export const useProjectActions = () =>
  useProjectStore((state) => state.actions);

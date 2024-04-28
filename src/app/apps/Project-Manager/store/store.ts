import { create } from "zustand";

import { PROJECTS } from "../util/data";
import { Project, Task } from "../util/types";
import {
  addProject,
  addTaskToProject,
  deleteProject,
  deleteTaskFromProject,
  getCurrentProject,
} from "./store-helpers";

export type State = {
  projects: Project[];
  selectedId: string;
};

type Action = {
  actions: {
    setSelectedId: (id: string) => void;
    addProject: (newProject: Project) => void;
    addTaskToProject: (project: Project, newTask: Task) => void;
    deleteTaskFromProject: (project: Project, indexToDelete: number) => void;
    deleteProject: (id: string) => void;
  };
};

const useProjectStore = create<State & Action>((set) => ({
  projects: [...PROJECTS],
  selectedId: "",
  actions: {
    setSelectedId: (id: string) =>
      set((state) => ({
        ...state,
        selectedId: id,
      })),

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

export const useSelectedId = () =>
  useProjectStore((state) => state.selectedId);

export const useProjectActions = () =>
  useProjectStore((state) => state.actions);

import { create } from "zustand";

import { Project, Task } from "../util/types";
import {
  addProject,
  addTaskToProject,
  deleteProject,
  deleteTaskFromProject,
  getCurrentProject,
  setFirstItemId,
  updateProject,
  updateProjectTasks,
} from "./store-helpers";

export type State = {
  projects: Project[];
  selectedId: string;
};

type Action = {
  actions: {
    loadProjects: (data: Project[]) => void;
    setSelectedId: (id: string) => void;
    setFirstItemId: () => void;
    addProject: (newProject: Project) => void;
    deleteProject: (id: string) => void;
    updateProject : (project : Project) => void,
    addTaskToProject: (project: Project, newTask: Task) => void;
    deleteTaskFromProject: (project: Project, indexToDelete: number) => void;
    updateProjectTasks: (displayProject : Project, updateTask: Task) => void;
  };
};

const useProjectStore = create<State & Action>((set) => ({
  projects: [],
  selectedId: "",
  actions: {
    loadProjects: (data: Project[]) =>
      set(() => ({
        projects: data,
        selectedId: data[0]?.id || "",
      })),

    setSelectedId: (id: string) =>
      set(() => ({
        selectedId: id,
      })),

    setFirstItemId: () =>
      set((state) => ({
        selectedId: setFirstItemId(state.projects),
      })),

    addProject: (newProject: Project) =>
      set((state) => addProject(state, newProject)),
    
    deleteProject: (id: string) => set((state) => deleteProject(state, id)),
    
    updateProject: (project: Project) =>
          set((state) => updateProject(state, project)),

    addTaskToProject: (project: Project, newTask: Task) =>
      set((state) => addTaskToProject(state, project, newTask)),

    deleteTaskFromProject: (project: Project, indexToDelete: number) =>
      set((state) => deleteTaskFromProject(state, project, indexToDelete)),

    updateProjectTasks: (displayProject : Project, updateTask: Task) =>
      set((state) => updateProjectTasks(state, displayProject, updateTask) ),
  },
}));

export const useProjects = () => useProjectStore((state) => state.projects);

export const useHasProjects = () =>
  useProjectStore((state) => state.projects.length > 0);

export const useDisplayProject = () =>
  useProjectStore((state) =>
    getCurrentProject(state.projects, state.selectedId)
  ) as Project;

export const useSelectedId = () => useProjectStore((state) => state.selectedId);

export const useProjectActions = () =>
  useProjectStore((state) => state.actions);

import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { Project, Task } from "../util/types";
import {
  addProject,
  getCurrentProject,
  addTaskToProject,
  deleteTaskFromProject,
  deleteProject,
} from "./store-helpers";
import { TASKS } from "../util/data";

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
    {
      id: uuidv4(),
      title: "Learning React",
      description: "Learn React from the group up",
      dueDate: dayjs(new Date()),
      tasks: [...TASKS],
    },
    {
      id: uuidv4(),
      title: "Learning React",
      description: "Learn React from the group up",
      dueDate: dayjs(new Date()),
      tasks: [...TASKS],
    },
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

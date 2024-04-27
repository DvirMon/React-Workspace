import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { Project } from "../types";
import { addProject, getCurrentProject, updateProjects } from "./store-helpers";
import { TASKS } from "../data";

export type State = {
  projects: Project[];
  selectedId: string;
};

type Action = {
  actions: {
    addProject: (newProject: Project) => void;
    updateProjects: (project: Project) => void;
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
  ],
  selectedId: "",
  actions: {
    addProject: (newProject: Project) =>
      set((state) => addProject(state, newProject)),

    updateProjects: (project: Project) =>
      set((state) => updateProjects(state, project)),
  },
}));

export const useProjects = () => useProjectStore((state) => state.projects);

export const useDisplayProject = () =>
  useProjectStore((state) =>
    getCurrentProject(state.projects, state.selectedId)
  ) as Project;

export const useProjectActions = () =>
  useProjectStore((state) => state.actions);

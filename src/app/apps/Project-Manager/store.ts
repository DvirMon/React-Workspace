import { create } from "zustand";
import { Project } from "./types";
import dayjs from "dayjs";

type State = {
  projects: Project[];
};

type Action = {
  addProject: (newProject: Project) => void;
};

export const useProjectStore = create<State & Action>((set) => ({
  projects: [
    {
      title: "Learning React",
      description: "Learn React from the group up",
      dueDate: dayjs(new Date()),
    },
  ],
  addProject: (newProject: Project) =>
    set((state) => addProject(state, newProject)),
}));

const addProject = (state: State, newProject: Project): State => ({
  ...state,
  projects: [...state.projects, { ...newProject }],
});

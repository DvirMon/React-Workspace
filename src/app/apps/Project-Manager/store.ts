import { create } from "zustand";
import { Project } from "./types";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

type State = {
  projects: Project[];
  selectedId: string;
};

type Action = {
  addProject: (newProject: Project) => void;
};

export const useProjectStore = create<State & Action>((set, get) => ({
  projects: [
    {
      id: uuidv4(),
      title: "Learning React",
      description: "Learn React from the group up",
      dueDate: dayjs(new Date()),
      tasks: [],
    },
  ],
  selectedId: "",
  addProject: (newProject: Project) =>
    set((state) => addProject(state, newProject)),
}));

const addProject = (state: State, newProject: Project): State => ({
  ...state,
  projects: [...state.projects, { ...newProject }],
});

function findProjectById(projects: Project[], id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getCurrentProject(
  projects: Project[],
  id: string
): Project | undefined {
  if (projects && id) {
    return findProjectById(projects, id);
  }
  return projects?.length > 0 ? projects[0] : undefined;
}

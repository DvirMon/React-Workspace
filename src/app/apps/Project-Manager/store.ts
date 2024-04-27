import { create } from "zustand";
import { Project, Task } from "./types";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import { deepClone } from "@mui/x-data-grid/internals";

type State = {
  projects: Project[];
  selectedId: string;
};

type Action = {
  addProject: (newProject: Project) => void;
  setProjects: (project: Project) => void;
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
  
  setProjects: (project: Project) =>
    set((state) => updateProject(state, project)),
}));

const addProject = (state: State, newProject: Project): State => ({
  ...state,
  projects: [...state.projects, { ...newProject, id: uuidv4() }],
});

const updateProject = (state: State, updateProject: Project): State => ({
  ...state,
  projects: [...updateProjects(state.projects, updateProject)],
});

function findProjectById(projects: Project[], id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

function updateProjects(
  projects: Project[],
  updateProject: Project
): Project[] {
  // const newState = projects.map((p) => ({ ...p.tasks.map((t) => ({ ...t })) }));
  const newState = deepClone(projects);
  const updateIndex = projects.findIndex((p) => p.id === updateProject.id);

  if (updateIndex >= 0) {
    newState[updateIndex] = updateProject;
  }

  return newState;
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

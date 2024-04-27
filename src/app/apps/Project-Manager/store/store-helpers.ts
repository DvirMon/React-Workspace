import { v4 as uuidv4 } from "uuid";
import { Project } from "../types";
import { State } from "./store";

export const addProject = (state: State, newProject: Project): State => ({
  ...state,
  projects: [...state.projects, { ...newProject, id: uuidv4() }],
});

export const updateProjects = (state: State, project: Project): State => ({
  ...state,
  projects: [...updateProject(state.projects, project)],
});

export const deleteProjectTask = (state: State, project: Project): State => ({
  ...state,
  projects: [...updateProject(state.projects, project)],
});




function updateProject(items: Project[], project: Project): Project[] {
  const newState = items.map((p) => {
    if (compareById(p, project)) {
      return {
        ...p,
        ...project,
      };
    }
    return p;
  });

  return newState;
}

function compareById(p1: Project, p2: Project): boolean {
  return p1.id === p2.id;
}

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
  

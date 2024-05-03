import {
  addEntity,
  deleteEntityById,
  deleteEntityByIndex,
  findEntityById,
  updateEntities,
  updateEntityByKey,
} from "@/lib/entity.helpers";
import { v4 as uuidv4 } from "uuid";
import { Project, Task } from "../util/types";
import { State } from "./store";

export const addProject = (state: State, newProject: Project): State => ({
  ...state,
  projects: [...state.projects, { ...newProject, id: uuidv4(), tasks: [] }],
});

export const addTaskToProject = (
  state: State,
  project: Project,
  newTask: Task
): State => ({
  ...state,
  projects: [
    ...updateEntities(
      state.projects,
      setProjectTasks(project, addEntity(project.tasks, newTask))
    ),
  ],
});

export const deleteProject = (state: State, id: string): State => ({
  ...state,
  projects: [...deleteEntityById(state.projects, id)],
});


export const updateProject = (state: State, project : Project): State => ({
  ...state,
  projects: [...updateEntities(state.projects, project)],
});


export const deleteTaskFromProject = (
  state: State,
  project: Project,
  indexToDelete: number
): State => ({
  ...state,
  projects: [
    ...updateEntities(
      state.projects,
      setProjectTasks(project, deleteEntityByIndex(project.tasks, indexToDelete))
    ),
  ],
});


export const updateProjectTasks = (
  state: State,
  project: Project,
  task: Task
): State => ({
  ...state,
  projects: [
    ...updateEntities(
      state.projects,
      setProjectTasks(project, updateEntities(project.tasks, task))
    ),
  ],
});

function setProjectTasks(project: Project, tasks: Task[]): Project {
  return updateEntityByKey(project, "tasks", tasks);
}


export function getCurrentProject(
  projects: Project[],
  id: string
): Project | undefined {
  if (projects && id) {
    return findEntityById(projects, id);
  }
  return projects?.length > 0 ? projects[0] : undefined;
}

export function setFirstItemId(projects: Project[]): string {
  return projects.length > 0 ? projects[0].id : "";
}

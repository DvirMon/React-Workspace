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
      setProjectTasks(
        project,
        addEntity(project.tasks, { ...newTask, id: uuidv4() })
      )
    ),
  ],
});

export const deleteProject = (state: State, id: string): State => ({
  ...state,
  projects: [...deleteEntityById(state.projects, id)],
});

export const updateProject = (state: State, project: Project): State => ({
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
      setProjectTasks(
        project,
        deleteEntityByIndex(project.tasks, indexToDelete)
      )
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

export function getDisplayData(
  project: Project | null
): Partial<Project> | null {
  if (project) {
    return {
      id: project.id,
      description: project.description,
      title: project.title,
      dueDate: project.dueDate,
    };
  }

  return null;
}

export function getCurrentProject(
  projects: Project[],
  id: string
): Project | null {
  if (projects && id) {
    return findEntityById(projects, id) || null;
  }
  return projects?.length > 0 ? projects[0] : null;
}

export function setFirstItemId(projects: Project[]): string {
  return projects.length > 0 ? projects[0].id : "";
}

export function compareProjects(p1: Project, p2: Project) {
  return (
    p1.description === p2.description &&
    p1.title === p2.title &&
    p1.dueDate.isSame(p2.dueDate)
  );
}

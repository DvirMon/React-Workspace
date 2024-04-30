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
    ...updateItems(
      state.projects,
      setProject(project, setTasks(project, newTask))
    ),
  ],
});

export const deleteProject = (state: State, id: string): State => ({
  ...state,
  projects: [...deleteItemById(state.projects, id)],
});

export const deleteTaskFromProject = (
  state: State,
  project: Project,
  indexToDelete: number
): State => ({
  ...state,
  projects: [
    ...updateItems(
      state.projects,
      setProject(project, deleteItemByIndex(project.tasks, indexToDelete))
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
    ...updateProjects(
      state.projects,
      setProject(project, updateItems(project.tasks, task))
    ),
  ],
});

function deleteItemByIndex<T>(items: T[], indexToDelete: number): T[] {
  items.splice(indexToDelete, 1);
  return [...items];
}

function deleteItemById<Entity extends { id: string }>(
  items: Entity[],
  id: string
): Entity[] {
  const indexToDelete = items.findIndex((item) => item.id === id);

  if (indexToDelete < 0) {
    return items;
  }

  return deleteItemByIndex(items, indexToDelete);
}

function setTasks(project: Project, newTask: Task): Task[] {
  return [...project.tasks, { ...newTask }];
}

function setProject(project: Project, tasks: Task[]): Project {
  return { ...project, tasks };
}

function updateProjects(items: Project[], project: Project): Project[] {
  return items.map((p) => {
    if (isIdEqual(p, project)) {
      return {
        ...p,
        ...project,
      };
    }

    return p;
  });
}

function updateItems<Entity extends { id: string }>(
  items: Entity[],
  itemToUpdate: Entity
) {
  return items.map((item: Entity) => {
    if (isIdEqual(item, itemToUpdate)) {
      return {
        ...item,
        ...itemToUpdate,
      };
    }

    return item;
  });
}

function isIdEqual<Entity extends { id: string }>(
  entity1: Entity,
  entity2: Entity
): boolean {
  return entity1.id === entity2.id;
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

export function setFirstItemId(projects: Project[]): string {
  return projects.length > 0 ? projects[0].id : "";
}

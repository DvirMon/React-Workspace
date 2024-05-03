import { create } from "zustand";

import { useShallow } from "zustand/react/shallow";
import { Project, Task } from "../util/types";
import {
  addProject,
  addTaskToProject,
  deleteProject,
  deleteTaskFromProject,
  getCurrentProject,
  getDisplayData,
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
    updateProject: (project: Project) => void;
    addTaskToProject: (newTask: Task) => void;
    deleteTaskFromProject: (indexToDelete: number) => void;
    updateProjectTasks: (updateTask: Task) => void;
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

    addTaskToProject: (newTask: Task) =>
      set((state) =>
        addTaskToProject(
          state,
          getCurrentProject(state.projects, state.selectedId) as Project,
          newTask
        )
      ),

    deleteTaskFromProject: (indexToDelete: number) =>
      set((state) =>
        deleteTaskFromProject(
          state,
          getCurrentProject(state.projects, state.selectedId) as Project,
          indexToDelete
        )
      ),

    updateProjectTasks: (updateTask: Task) =>
      set((state) =>
        updateProjectTasks(
          state,
          getCurrentProject(state.projects, state.selectedId) as Project,
          updateTask
        )
      ),
  },
}));

export const useProjects = () => useProjectStore((state) => state.projects);

export const useProjectsSidenav = () =>
  useProjectStore(
    useShallow((state) =>
      state.projects.map((p) => ({
        id: p.id,
        title: p.title,
        tasks: p.tasks.length,
      }))
    )
  );

export const useCurrentProject = () =>
  useProjectStore(
    useShallow((state) => getCurrentProject(state.projects, state.selectedId))
  );

export const useCurrentProjectTasks = () =>
  useProjectStore(
    (state) => getCurrentProject(state.projects, state.selectedId)?.tasks
  ) as Task[];

export const useDisplayProject = () =>
  useProjectStore(
    useShallow((state) =>
      getDisplayData(getCurrentProject(state.projects, state.selectedId))
    )
  ) as Project;

export const useHasProjects = () =>
  useProjectStore(useShallow((state) => state.projects.length > 0));

export const useSelectedId = () => useProjectStore((state) => state.selectedId);

export const useProjectActions = () =>
  useProjectStore((state) => state.actions);

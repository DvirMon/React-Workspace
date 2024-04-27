"use client";

import { Divider } from "@mui/material";
import {
  useDisplayProject,
  useProjectActions,
  useProjects,
} from "../store/store";
import { Task } from "../types";
import ProjectInfo from "./project-info";
import ProjectTasksList from "./project-tasks-list";
import Sidebar from "./sidebar";

export default function ProjectsPage() {
  const projects = useProjects();
  const displayProject = useDisplayProject();
  const { addTaskToProject, deleteTaskFromProject } = useProjectActions();

  const { tasks } = displayProject;

  function onAddTask(task: Task) {
    addTaskToProject(displayProject, task);
  }

  function onClearTask(indexToDelete: number) {
    deleteTaskFromProject(displayProject, indexToDelete);
  }

  return (
    <div className="flex flex-row h-full">
      <nav className="w-1/4 flex flex-col justify-start p-4">
        <Sidebar projects={projects} />
      </nav>
      <article className="w-full flex flex-col gap-4 h-full p-4">
        <ProjectInfo {...displayProject} />
        <Divider />
        <ProjectTasksList
          tasks={tasks}
          onAddTask={onAddTask}
          onClearTask={onClearTask}
        />
      </article>
    </div>
  );
}

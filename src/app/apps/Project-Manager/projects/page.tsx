"use client";

import { Divider } from "@mui/material";
import { useEffect } from "react";
import {
  useDisplayProject,
  useProjectActions,
  useProjects
} from "../store/store";
import { Task } from "../util/types";
import ProjectInfo from "./components/project-info";
import ProjectTasksList from "./components/project-tasks-list";
import ProjectSidebar from "./components/project-sidebar";

export default function ProjectsPage() {
  const projects = useProjects();
  const displayProject = useDisplayProject();

  const {
    addTaskToProject,
    deleteTaskFromProject,
    deleteProject,
    setSelectedId,
    setFirstItemId,
  } = useProjectActions();

  useEffect(() => {
    setSelectedId(displayProject.id);
  });

  function handleAddTask(task: Task): void {
    addTaskToProject(displayProject, task);
  }

  function handleClearTask(indexToDelete: number): void {
    deleteTaskFromProject(displayProject, indexToDelete);
  }

  function handleDeleteProject(id: string): void {
    deleteProject(id);
    setFirstItemId();
  }

  return (
    <div className="flex flex-row h-full">
      <nav className="w-1/3 flex flex-col justify-start p-4">
        <ProjectSidebar projects={projects} />
      </nav>
      <article className="w-full flex flex-col gap-4 h-full p-4">
        <ProjectInfo {...displayProject} onDeleteProject={handleDeleteProject} />
        <Divider />
        <ProjectTasksList
          tasks={displayProject.tasks}
          onAddTask={handleAddTask}
          onClearTask={handleClearTask}
        />
      </article>
    </div>
  );
}

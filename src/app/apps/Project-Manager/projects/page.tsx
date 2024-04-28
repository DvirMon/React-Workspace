"use client";

import { Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  useDisplayProject,
  useProjectActions,
  useProjects,
} from "../store/store";
import { Task } from "../util/types";
import ProjectInfo from "./components/project-info";
import Sidebar from "./components/sidebar";
import ProjectTasksList from "./components/project-tasks-list";

export default function ProjectsPage() {
  const projects = useProjects();
  const displayProject = useDisplayProject();
  
  const { addTaskToProject, deleteTaskFromProject, deleteProject } =
    useProjectActions();

  function onAddTask(task: Task): void {
    addTaskToProject(displayProject, task);
  }

  function onClearTask(indexToDelete: number): void {
    deleteTaskFromProject(displayProject, indexToDelete);
  }

  function onDeleteProject(id: string): void {
    deleteProject(id);
  }

  return (
    <div className="flex flex-row h-full">
      <nav className="w-1/3 flex flex-col justify-start p-4">
        <Sidebar projects={projects} />
      </nav>
      <article className="w-full flex flex-col gap-4 h-full p-4">
        <ProjectInfo {...displayProject} onDeleteProject={onDeleteProject} />
        <Divider />
        <ProjectTasksList
          tasks={displayProject.tasks}
          onAddTask={onAddTask}
          onClearTask={onClearTask}
        />
      </article>
    </div>
  );
}

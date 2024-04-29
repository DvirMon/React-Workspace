"use client";

import { Divider, Typography } from "@mui/material";
import { useEffect } from "react";
import {
  useDisplayProject,
  useProjectActions,
  useProjects,
} from "../store/store";
import { Task } from "../util/types";
import ProjectInfo from "./components/project-info";
import ProjectSidebar from "./components/project-sidebar";
import ProjectTaskItem from "./tasks/task-item";
import ProjectTaskForm from "./tasks/tasks-form";

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
      <main className="w-full flex flex-col gap-4 h-full p-4">
        <ProjectInfo
          {...displayProject}
          onDeleteProject={handleDeleteProject}
        />
        <Divider />

        <Typography variant="h3">Tasks</Typography>

        <ProjectTaskForm onAddTask={handleAddTask} />

        <div className="flex flex-col gap-4">
          {displayProject.tasks.map((task: Task, index) => (
            <ProjectTaskItem
              key={task.id}
              task={task}
              onClear={() => handleClearTask(index)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

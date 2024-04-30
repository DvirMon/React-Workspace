"use client";

import { Divider, Stack, Typography } from "@mui/material";
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

  function handleUpdateTask(task: Task, index : number): void {
    console.log(task);
    // addTaskToProject(displayProject, task);
  }

  function handleDeleteTask(indexToDelete: number): void {
    deleteTaskFromProject(displayProject, indexToDelete);
  }

  function handleDeleteProject(id: string): void {
    deleteProject(id);
    setFirstItemId();
  }

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}>
      <nav className="w-2/8 flex flex-col justify-start p-4">
        <ProjectSidebar projects={projects} />
      </nav>
      <main className="w-2/3 flex flex-col gap-4 h-full p-4">
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
              index={index}
              onDelete={() => handleDeleteTask(index)}
              onUpdateTask={handleUpdateTask}
            />
          ))}
        </div>
      </main>
    </Stack>
  );
}

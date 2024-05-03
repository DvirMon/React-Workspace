"use client";

import { Divider, Stack, Typography } from "@mui/material";
import { useCallback, useEffect, useMemo } from "react";
import {
  useDisplayProject,
  useProjectActions,
  useProjects,
} from "../store/store";
import { Project, Task } from "../util/types";
import ProjectInfo from "./components/project-info";
import ProjectSidebar from "./components/project-sidebar";
import ProjectTaskItem from "./tasks/task-item";
import ProjectTaskForm from "./tasks/tasks-form";

export default function ProjectsPage() {
  const displayProject: Project = useDisplayProject();

  const {
    addTaskToProject,
    deleteTaskFromProject,
    updateProjectTasks,
    setSelectedId,
  } = useProjectActions();

  const updateSelectedId = useCallback(setSelectedId, [setSelectedId]);
  const { id, tasks } = displayProject;

  useEffect(() => {
    updateSelectedId(id);
  }, [updateSelectedId, id]);

  function handleAddTask(task: Task): void {
    addTaskToProject(displayProject, task);
  }

  function handleUpdateTask(task: Task): void {
    updateProjectTasks(displayProject, task);
  }

  function handleDeleteTask(indexToDelete: number): void {
    deleteTaskFromProject(displayProject, indexToDelete);
  }

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}>
      <nav className="w-2/8 flex flex-col justify-start p-4">
        <ProjectSidebar  />
      </nav>
      <main className="w-2/3 flex flex-col gap-4 h-full p-4">
        <ProjectInfo projectInfo={displayProject} />
        <Divider />

        <Typography variant="h3">Tasks</Typography>

        <ProjectTaskForm onAddTask={handleAddTask} />

        <div className="flex flex-col gap-4">
          {tasks.map((task: Task, index) => (
            <ProjectTaskItem
              key={task.id}
              task={task}
              onDelete={() => handleDeleteTask(index)}
              onUpdateTask={handleUpdateTask}
            />
          ))}
        </div>
      </main>
    </Stack>
  );
}

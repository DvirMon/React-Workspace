"use client";

import { Divider } from "@mui/material";
import { getCurrentProject, useProjectStore } from "../store";
import { Project, Task } from "../types";
import ProjectInfo from "./project-info";
import ProjectTasksList from "./project-tasks-list";
import Sidebar from "./sidebar";

export default function ProjectsPage() {
  const projects = useProjectStore((state) => state.projects);

  const displayProject = useProjectStore((state) =>
    getCurrentProject(state.projects, state.selectedId)
  ) as Project;

  const setProjects = useProjectStore((state) => state.setProjects);

  const tasks = displayProject.tasks;

  function addNewTask(task: Task) {
    const newTasks = [...displayProject.tasks, { ...task }];
    const updateProject = { ...displayProject, tasks: newTasks };
    setProjects(updateProject);
  }

  return (
    <div className="flex flex-row h-full">
      <nav className="w-1/4 flex flex-col justify-start p-4">
        <Sidebar projects={projects} />
      </nav>
      <article className="w-full flex flex-col gap-4 h-full p-4">
        <ProjectInfo {...displayProject} />
        <Divider />
        <ProjectTasksList tasks={tasks} addNewTask={addNewTask} />
      </article>
    </div>
  );
}

"use client";

import { Divider } from "@mui/material";
import Sidebar from "./sidebar";
import { getCurrentProject, useProjectStore } from "../store";
import ProjectInfo from "./project-info";
import ProjectTasksList from "./project-tasks-list";
import { Project } from "../types";

export default function ProjectsPage() {
  const projects = useProjectStore((state) => state.projects);
  const displayProject = useProjectStore((state) =>
    getCurrentProject(state.projects, state.selectedId)
  ) as Project;

  const tasks = displayProject.tasks;

  return (
    <div className="flex flex-row h-full">
      <nav className="w-1/4 flex flex-col justify-start p-4">
        <Sidebar projects={projects} />
      </nav>
      <article className="w-full flex flex-col gap-4 h-full p-4">
        <ProjectInfo {...displayProject} />
        <Divider />
        <ProjectTasksList tasks={tasks} />
      </article>
    </div>
  );
}

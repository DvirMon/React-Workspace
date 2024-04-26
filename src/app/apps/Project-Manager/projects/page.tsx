"use client";

import { Divider } from "@mui/material";
import Sidebar from "./sidebar";
import { useProjectStore } from "../store";
import ProjectCard from "./project-card";
import ProjectTask from "./project-task";

export default function ProjectsPage() {
    
  const projects = useProjectStore((state) => state.projects);

  return (
    <div className="flex flex-row h-full">
      <nav className="w-1/4 flex flex-col justify-start p-4">
        <Sidebar projects={projects} />
      </nav>
      <article className="w-full flex flex-col gap-4 h-full p-4">
        <ProjectCard {...projects[0]} />
        <Divider />
        <ProjectTask />
      </article>
    </div>
  );
}

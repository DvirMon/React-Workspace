"use client";

import { useState } from "react";
import { Project } from "../types";
import ProjectForm from "./form";
import Sidebar from "./sidebar";



export default function NewPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  return (
    <div className="flex flex-row  h-full">
      <nav className="w-1/4 flex flex-col justify-center">
        <Sidebar projects={projects} />
      </nav>
      <article className="w-full flex flex-col justify-center h-full">
        <ProjectForm />
      </article>
    </div>
  );
}

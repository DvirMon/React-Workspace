"use client";

import { useState } from "react";
import { Project } from "../types";
import ProjectForm from "./form";
import Sidebar from "./sidebar";

export default function NewProjectPage() {
  const [projects, setProjects] = useState<Project[]>([{} as Project]);

  function handleSubmit(data: Project): void {
    setProjects((oldState) => [...oldState, { ...data }]);
  }

  return (
    <div className="flex flex-row  h-full">
      {/* <nav className="w-1/4 flex flex-col justify-center">
        <Sidebar projects={projects} />
      </nav> */}
      <article className="w-full flex flex-col justify-center h-full">
        <ProjectForm setProjects={handleSubmit} />
      </article>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Project } from "../types";
import ProjectForm from "./form";
import { useRouter } from "next/navigation";

export default function NewProjectPage() {
  const [projects, setProjects] = useState<Project[]>([{} as Project]);
  const router = useRouter();

  function handleSubmit(data: Project): void {
    setProjects((oldState) => [...oldState, { ...data }]);
    router.push('/apps/Project-Manager');
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

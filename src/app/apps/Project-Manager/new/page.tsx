"use client";

import { useRouter } from "next/navigation";
import { useProjectStore } from "../store";
import { Project } from "../types";
import ProjectForm from "./form";

export default function NewProjectPage() {
  const addProject = useProjectStore((state) => state.addProject);

  const router = useRouter();

  function handleSubmit(data: Project): void {
    addProject(data);
    router.push("/apps/Project-Manager");
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

"use client";

import { useRouter } from "next/navigation";
import { useProjectActions } from "../store/store";
import { Project } from "../util/types";
import ProjectForm from "./form";

export default function NewProjectPage() {
  const { addProject } = useProjectActions();

  const router = useRouter();

  function handleSubmit(data: Project): void {
    addProject(data);
    router.push("/apps/Project-Manager/projects");
  }

  return (
    <div className="flex flex-row  h-full">
      <article className="w-full flex flex-col justify-center h-full">
        <ProjectForm setProjects={handleSubmit} />
      </article>
    </div>
  );
}

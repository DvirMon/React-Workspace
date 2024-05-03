"use client";

import { useRouter } from "next/navigation";
import { routes } from "../routes";
import { useProjectActions } from "../store/store";
import { Project } from "../util/types";
import ProjectForm from "./project-form";

export default function NewProjectPage() {
  const { addProject } = useProjectActions();
  const router = useRouter();

  function handleSubmit(data: Project): void {
    addProject(data);
    router.push(routes.projects);
  }

  function handleCancel() {
    router.back();
  }

  return (
    <div className="w-1/2 flex flex-col gap-4">
      <ProjectForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
}

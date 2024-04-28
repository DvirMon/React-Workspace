"use client";

import { useRouter } from "next/navigation";
import { useProjectActions } from "../store/store";
import { Project } from "../util/types";
import ProjectForm from "./form";
import { routes } from "../routes";
import { Button } from "@mui/material";

export default function NewProjectPage() {
  const { addProject } = useProjectActions();

  const router = useRouter();

  function handleSubmit(data: Project): void {
    addProject(data);
    router.push(routes.projects);
  }

  return (
    <div className="w-1/2 flex flex-col gap-4">
      <Button
        className="text-2xl flex self-end"
        variant="contained"
        type="button"
        onClick={() => router.push(routes.root)}>
        Cancel
      </Button>
      <ProjectForm setProjects={handleSubmit} />
    </div>
  );
}

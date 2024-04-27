"use client";

import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useProjects } from "./store/store";

export default function ProjectManagerPage() {
  const projects = useProjects();

  const router = useRouter();

  if (projects.length > 0) {
    router.push("/apps/Project-Manager/projects");
  }

  return (
    <div className="flex flex-col justify-center h-full">
      <section className="flex flex-col justify-center items-center gap-6">
        <Typography className="text-3xl">No Project Exist</Typography>
        <Typography className="text-2xl">Start a new project</Typography>
        <Link href={"/apps/Project-Manager/new"}>
          <Button variant="contained" className="text-xl">
            <span className="p-2">Create New Project</span>
          </Button>
        </Link>
      </section>
    </div>
  );
}

"use client";

import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useProjectStore } from "./store";
import Sidebar from "./components/sidebar";

export default function ProjectManagerPage() {
  const projects = useProjectStore((state) => state.projects);

  if (projects.length === 0) {
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

  return (
    <div className="flex flex-row  h-full">
      <nav className="w-1/4 flex flex-col justify-center">
        <Sidebar projects={projects} />
      </nav>
      <article className="w-full flex flex-col justify-center h-full"></article>
    </div>
  );
}

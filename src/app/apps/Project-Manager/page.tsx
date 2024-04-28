"use client";

import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useHasProjects, useProjects } from "./store/store";
import { routes } from "./routes";

export default function ProjectManagerPage() {
  const projects = useProjects();
  const hasProjects = useHasProjects();

  return (
    <div className="flex flex-col justify-center h-full">
      <section className="flex flex-col justify-center items-center gap-6">
        <Typography className="text-3xl">
          {projects.length
            ? "You have " + projects.length + " Open Projects"
            : "No Project Exist"}
        </Typography>
        <Typography className="text-2xl">Start a new project</Typography>
        <Button variant="contained" className="text-xl">
          <Link href={hasProjects ? routes.projects : routes.new}>
            <span className="p-2">
              {" "}
              {hasProjects ? "Go To Projects" : "Create New Project"}
            </span>
          </Link>
        </Button>
      </section>
    </div>
  );
}

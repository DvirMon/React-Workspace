"use client";

import { usePathThemeActions } from "@/hooks/usePathTheme";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { routes } from "./routes";
import { useHasProjects, useProjectActions, useProjects } from "./store/store";
import { PROJECTS } from "./util/data";

export default function ProjectManagerPage() {
  const projects = useProjects();
  const hasProjects = useHasProjects();
  const { loadProjects } = useProjectActions();
  const { setPathTheme } = usePathThemeActions();

  useEffect(() => {
    setPathTheme("projectManaging");
  });

  // useEffect(() => {
  //   loadProjects(PROJECTS);
  // });

  const titleText = projects.length
    ? "You have " + projects.length + " Open Projects"
    : "No Project Exist";

  const buttonText = hasProjects ? "Go To Projects" : "Create New Project";

  return (
    <div className="flex flex-col justify-center h-full">
      <section className="flex flex-col justify-center items-center gap-6">
        <Image
          height={100}
          width={100}
          src={"/no-projects.png"}
          alt="no-projects-logo"
        />{" "}
        <Typography className="text-3xl">{titleText}</Typography>
        <Button variant="contained" className="text-xl">
          <Link href={hasProjects ? routes.projects : routes.new}>
            <span className="p-2">{buttonText}</span>
          </Link>
        </Button>
      </section>
    </div>
  );
}

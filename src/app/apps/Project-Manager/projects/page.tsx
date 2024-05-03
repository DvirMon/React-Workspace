"use client";

import { Divider, Stack, Typography } from "@mui/material";
import ProjectInfo from "./components/project-info";
import ProjectSidebar from "./components/project-sidebar";
import ProjectTaskForm from "./tasks/tasks-form";
import ProjectTasksList from "./tasks/tasks-list";

export default function ProjectsPage() {


  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}>
      <nav className="w-2/8 flex flex-col justify-start p-4">
        <ProjectSidebar />
      </nav>
      <main className="w-2/3 flex flex-col gap-4 h-full p-4">
        <ProjectInfo />
        <Divider />

        <Typography variant="h3">Tasks</Typography>

        <ProjectTaskForm />

        <ProjectTasksList />

      </main>
    </Stack>
  );
}

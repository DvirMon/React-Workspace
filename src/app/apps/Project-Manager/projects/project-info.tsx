import { Button, Typography } from "@mui/material";
import React from "react";
import { Project } from "../types";

interface ProjectInfoProps extends Project {}

export default function ProjectInfo({
  title,
  dueDate,
  description,
}: ProjectInfoProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      <section className="w-full flex flex-col gap-1">
        <section className="w-full flex justify-between">
          <Typography variant="h3">{title}</Typography>
          <Button className="text-xl" variant="contained">
            Delete
          </Button>
        </section>
        <Typography variant="h6">{dueDate.format("MMM DD, YYYY")}</Typography>
      </section>
      <Typography variant="h6">{description}</Typography>
    </div>
  );
}

import { Typography } from "@mui/material";
import React from "react";
import { Project } from "../types";

interface ProjectCardProps extends Project {}

export default function ProjectCard({
  title,
  dueDate,
  description,
}: ProjectCardProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      <Typography>{title}</Typography>
      <Typography>{dueDate.format("MMM DD, YYYY")}</Typography>
      <Typography>{description}</Typography>
    </div>
  );
}

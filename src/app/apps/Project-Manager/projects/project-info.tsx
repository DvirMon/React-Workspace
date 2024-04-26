import { Typography } from "@mui/material";
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
      <Typography variant="h3">{title}</Typography>
      <Typography variant="h6">{dueDate.format("MMM DD, YYYY")}</Typography>
      <Typography variant="h6">{description}</Typography>
    </div>
  );
}

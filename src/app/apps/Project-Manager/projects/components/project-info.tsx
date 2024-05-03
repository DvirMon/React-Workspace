import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Project } from "../../util/types";
import ProjectDialog from "./project-dialog";

interface ProjectInfoProps extends Project {
  onDeleteProject: (id: string) => void;
  onEditProject: (project: Partial<Project>) => void;
}

export default function ProjectInfo({
  id,
  title,
  dueDate,
  description,
  onDeleteProject,
  onEditProject,
}: ProjectInfoProps) {
  const [open, setOpen] = useState(false);

  const project = { title, description, dueDate } as Project;

  function handleDialogOpen() {
    setOpen(true);
  }

  function handleDialogClose() {
    setOpen(false);
  }

  function handleDialogSubmit(data: Partial<Project>) {
    onEditProject(data);
    setOpen(false);
  }

  return (
    <article className="w-full flex flex-col gap-4">
      <ProjectDialog
        data={project}
        open={open}
        onClose={handleDialogClose}
        onSubmit={handleDialogSubmit}
      />
      <section className="w-full flex flex-col gap-1">
        <section className="w-full flex justify-between">
          <Typography className="capitalize" variant="h3">
            {title}
          </Typography>
          <section>
            <IconButton
              aria-label="edit"
              className="self-center"
              onClick={handleDialogOpen}>
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              className="self-center"
              onClick={() => onDeleteProject(id)}>
              <DeleteIcon />
            </IconButton>
          </section>
        </section>
        <Typography className="text-slate-400" variant="h6">
          {dueDate.format("MMM DD, YYYY")}
        </Typography>
      </section>
      <Typography className="whitespace-pre-line" variant="h6">
        {description}
      </Typography>
    </article>
  );
}

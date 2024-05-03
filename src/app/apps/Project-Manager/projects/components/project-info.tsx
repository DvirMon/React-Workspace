import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Project } from "../../util/types";
import ProjectDialog from "./project-dialog";
import { useProjectActions } from "../../store/store";

interface ProjectInfoProps {
  projectInfo: Project;
}

export default function ProjectInfo({ projectInfo }: ProjectInfoProps) {

  console.log('project info called')

  const [open, setOpen] = useState(false);

  const { updateProject, deleteProject, setFirstItemId } = useProjectActions();

  const { id, title, description, dueDate } = projectInfo;

  function handleDialogOpen() {
    setOpen(true);
  }

  function handleDialogClose() {
    setOpen(false);
  }

  function handleDialogSubmit(data: Partial<Project>) {
    updateProject({ ...projectInfo, ...data });
    setOpen(false);
  }

  function handleDeleteProject(id: string): void {
    deleteProject(id);
    setFirstItemId();
  }

  return (
    <article className="w-full flex flex-col gap-4">
      <ProjectDialog
        data={projectInfo}
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
              onClick={() => handleDeleteProject(id)}>
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

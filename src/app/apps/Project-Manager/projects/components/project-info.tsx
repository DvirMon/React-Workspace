import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Typography } from "@mui/material";
import { Project } from "../../util/types";

interface ProjectInfoProps extends Project {
  onDeleteProject: (id: string) => void;
}

export default function ProjectInfo({
  id,
  title,
  dueDate,
  description,
  onDeleteProject,
}: ProjectInfoProps) {
  return (
    <article className="w-full flex flex-col gap-4">
      <section className="w-full flex flex-col gap-1">
        <section className="w-full flex justify-between">
          <Typography className="capitalize" variant="h3">
            {title}
          </Typography>

          <IconButton
            aria-label="delete"
            className="self-center"
            onClick={() => onDeleteProject(id)}>
            <DeleteIcon />
          </IconButton>
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

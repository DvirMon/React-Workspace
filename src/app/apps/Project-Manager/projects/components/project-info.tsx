import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { routes } from "../../routes";
import { Project } from "../../util/types";

interface ProjectInfoProps extends Project {
  onDeleteProject: (id: string) => void;
}


//TODO - 1. ask danit on delete/edit location // 
//TODO - 2. ask danit on edit form - inline or new page // 
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
          <section>
            <IconButton aria-label="edit" className="self-center">
              <Link href={routes.new}>
                <EditIcon />
              </Link>
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

import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { routes } from "../../routes";
import { useProjectActions, useSelectedId } from "../../store/store";
import { Project } from "../../util/types";

interface SidebarProps {
  projects: Project[];
}

export default function ProjectSidebar({ projects }: SidebarProps) {
  const selectedId = useSelectedId();
  const { setSelectedId } = useProjectActions();

  const projectsSize = projects.length;

  function handleItemClick(id: string) {
    setSelectedId(id);
  }

  const title = projectsSize
    ? "You have " + projectsSize + " Open Projects"
    : "No Project Exist";

  return (
    <>
      <section className="flex flex-col gap-4">
        <Typography className="text-2xl">{title}</Typography>
        <Button variant="contained" className="text-lg">
          <Link href={routes.new}>Add New Project</Link>
        </Button>
      </section>
      <List className="h-full">
        {projects.map(({ title, tasks, id }: Project, index) => (
          <ListItem
            key={index}
            disablePadding
            secondaryAction={
              <IconButton edge="end" aria-label="edit">
                <Link href={routes.new}>
                  <EditIcon />
                </Link>
              </IconButton>
            }>
            <ListItemButton
              className="mb-4 mt-4"
              selected={id === selectedId}
              onClick={() => handleItemClick(id)}>
              <ListItemText
                className="capitalize"
                primary={title}
                secondary={
                  "open tasks " +
                  (tasks?.length > 0 ? `(${tasks?.length})` : "")
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

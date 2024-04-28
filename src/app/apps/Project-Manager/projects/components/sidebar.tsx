import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useProjectActions, useSelectedId } from "../../store/store";
import { Project } from "../../util/types";
import Link from "next/link";
import { routes } from "../../routes";

interface SidebarProps {
  projects: Project[];
}

export default function Sidebar({ projects }: SidebarProps) {
  const selectedId = useSelectedId();
  const { setSelectedId } = useProjectActions();

  const projectsSize = projects.length;

  function handleIemClick(id: string) {
    setSelectedId(id);
  }

  return (
    <>
      <section className="flex flex-col gap-4">
        <Typography className="text-2xl">
          {projectsSize
            ? "You have " + projectsSize + " Open Projects"
            : "No Project Exist"}
        </Typography>
        <Button variant="contained" className="text-lg">
          <Link href={routes.new}>Add New Project</Link>
        </Button>
      </section>
      <List className="h-full">
        {projects.map(({ title, tasks, id }: Project, index) => (
          <ListItemButton
            className="mb-4 mt-4"
            key={index}
            selected={id === selectedId}
            onClick={() => handleIemClick(id)}>
            <ListItem disablePadding>
              <ListItemText
                primary={title}
                secondary={
                  "open tasks " +
                  (tasks?.length > 0 ? `(${tasks?.length})` : "")
                }
              />
            </ListItem>
          </ListItemButton>
        ))}
      </List>
    </>
  );
}

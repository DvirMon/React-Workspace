import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material";
import Link from "next/link";
import { routes } from "../../routes";
import {
  useProjectActions,
  useProjectsSidenav,
  useSelectedId
} from "../../store/store";
import { Project } from "../../util/types";

interface SidebarProps {
  projects: Project[];
}

export default function ProjectSidebar() {

  const projectsItems = useProjectsSidenav();

  console.log("project sidebar called");

  const selectedId = useSelectedId();
  const { setSelectedId } = useProjectActions();

  const projectsSize = projectsItems.length;

  function handleItemClick(id: string) {
    if (selectedId !== id) {
      setSelectedId(id);
    }
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
        {projectsItems.map(({ title, tasks, id }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              className="mb-4 mt-4"
              selected={id === selectedId}
              onClick={() => handleItemClick(id)}>
              <ListItemText
                className="capitalize"
                primary={title}
                secondary={"open tasks " + (tasks ? `(${tasks})` : "")}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

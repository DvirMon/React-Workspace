import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Project } from "../../util/types";

interface SidebarProps {
  projects: Project[];
}

export default function Sidebar({ projects }: SidebarProps) {
  const projectsSize = projects.length;

  return (
    <>
      <Typography className="text-2xl">
        {projectsSize
          ? "You have " + projectsSize + " Open Projects"
          : "No Project Exist"}
      </Typography>
      <List className="h-full">
        {projects.map(({ title, tasks }: Project, index) => (
          <ListItemButton key={index}>
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

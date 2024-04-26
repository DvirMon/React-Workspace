import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Project } from "../types";

interface SidebarProps {
  projects: Project[];
}

export default function Sidebar({ projects }: SidebarProps) {
  const projectsSize = projects.length;

  return (
    <>
      <Typography className="text-2xl">
        {projectsSize
          ? "You have " + { projectsSize } + " projects"
          : "No Project Exist"}
      </Typography>
      <List className="h-full p-4">
        {projects.map(({ title }: Project, index) => (
          <ListItem key={index}>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

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
          ? "You have " + projectsSize + " Projects"
          : "No Project Exist"}
      </Typography>
      <List className="h-full">
        {projects.map(({ title, tasks }: Project, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText
              primary={title}
              secondary={
                "open tasks " + (tasks?.length > 0 ? `(${tasks?.length})` : "")
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

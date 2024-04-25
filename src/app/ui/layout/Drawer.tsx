"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Divider, IconButton, List, Toolbar } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { mainListItems, secondaryListItems } from "./navigation";

interface AppDrawerProps {
  width?: number;
  isOpen?: boolean;
  setOpen: (value: boolean) => void;
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ width: number }>(({ theme, open, width }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    overflowX: "hidden",
    width: width,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function AppDrawer({
  isOpen = true,
  width = 240,
  setOpen,
}: AppDrawerProps) {
  const toggleDrawer = () => {
    setOpen(!isOpen);
  };

  return (
    <Drawer variant="permanent" width={width} open={isOpen}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {/* {mainListItems}
        <Divider sx={{ my: 1 }} /> */}
        {secondaryListItems}
      </List>
    </Drawer>
  );
}

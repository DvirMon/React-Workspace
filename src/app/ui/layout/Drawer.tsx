"use client";
import { usePathname } from "next/navigation";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Divider,
  IconButton,
  List,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import MenuItem, { secondaryItems } from "./MenuItem";

interface AppDrawerProps {
  width?: number;
  isOpen?: boolean;
  setOpen?: (value: boolean) => void;
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
  width = 260,
  setOpen,
}: AppDrawerProps) {
  const pathname = usePathname();

  const toggleDrawer = () => {
    if (setOpen) {
      setOpen(!isOpen);
    }
  };

  return (
    <Drawer variant="permanent" width={width} open={isOpen}>
      <Toolbar className="p-2">
        <Stack className="w-full items-end" direction="row" spacing={1}>
          <Image
            alt="ReactJs"
            width={35}
            height={35}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          />
          <Typography variant="h6">React Workspace</Typography>
        </Stack>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {/* {mainListItems}
        <Divider sx={{ my: 1 }} /> */}
        {secondaryItems.map((item, index) => (
          <MenuItem key={index} {...item} pathname={pathname} />
        ))}
      </List>
    </Drawer>
  );
}

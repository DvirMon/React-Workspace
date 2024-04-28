"use client";

import MenuIcon from "@mui/icons-material/Menu";
import { Breadcrumbs } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { usePathname } from "next/navigation";

interface AppBarProps {
  width?: number;
  isOpen?: boolean;
  setOpen: (value: boolean) => void;
}

const AppBar = styled(MuiAppBar)<{ open: boolean; width: number }>(
  ({ theme, open, width }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: width,
      width: `calc(100% - ${width}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);

function separateRoute(route: string) {
  return route.split("/").filter((path) => !!path);
}

export default function AppHeader({
  setOpen,
  isOpen = true,
  width = 240,
}: AppBarProps) {
  const toggleDrawer = () => {
    setOpen(!isOpen);
  };

  const pathname = usePathname();
  const breadcrumbs = separateRoute(pathname);

  console.log(breadcrumbs);

  return (
    <AppBar position="absolute" open={isOpen} width={width}>
      <Toolbar
        sx={{
          pr: "24px",
        }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(isOpen && { display: "none" }),
          }}>
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs.map((path) => (
              <Typography
                className="capitalize"
                key={path}
                color="text.primary">
                {path}
              </Typography>
            ))}
          </Breadcrumbs>{" "}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

import BarChartIcon from "@mui/icons-material/BarChart";
import CalculateIcon from "@mui/icons-material/Calculate";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Link from "next/link";
import * as React from "react";

export const routes = {
  dashboard: "/",
  orders: "/orders",
  customers: "/customers",
  reports: "/reports",
  ticTacToe: "/apps/Tic-Tac-Toe",
  investment: "/apps/Investment-Calculator",
  countdown: "/apps/Countdown",
  managing: "/apps/Project-Manager",
};

const menuItems = [
  { icon: <DashboardIcon />, text: "Dashboard", link: routes.dashboard },
  { icon: <ShoppingCartIcon />, text: "Orders", link: routes.orders },
  { icon: <PeopleIcon />, text: "Customers", link: routes.customers },
  { icon: <BarChartIcon />, text: "Reports", link: routes.reports },
];
const secondaryItems = [
  { icon: <Grid3x3Icon />, text: "Tic Tac Toe", link: routes.ticTacToe },
  { icon: <CalculateIcon />, text: "Calculator", link: routes.investment },
  { icon: <HourglassBottomIcon />, text: "Countdown", link: routes.countdown },
  { icon: <AppRegistrationIcon />, text: "Project Managing", link: routes.managing },
];

export const mainListItems = (
  <React.Fragment>
    {menuItems.map(({ icon, text, link }, index) => (
      <Link href={link} key={index}>
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </Link>
    ))}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Projects
    </ListSubheader>
    {secondaryItems.map(({ icon, text, link }, index) => (
      <Link href={link} key={index}>
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </Link>
    ))}
  </React.Fragment>
);

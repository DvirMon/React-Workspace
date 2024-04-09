import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import Link from "next/link";

export const routes = {
  dashboard: "/",
  orders: "orders",
  customers: "customers",
  reports: "reports",
  ticTacToe: "tictactoe",
};

const menuItems = [
  { icon: <DashboardIcon />, text: "Dashboard", link: routes.dashboard },
  { icon: <ShoppingCartIcon />, text: "Orders", link: routes.orders },
  { icon: <PeopleIcon />, text: "Customers", link: routes.customers },
  { icon: <BarChartIcon />, text: "Reports", link: routes.reports },
];
const secondaryItems = [
  { icon: <Grid3x3Icon />, text: "Tic Tac Toe", link: routes.ticTacToe },
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

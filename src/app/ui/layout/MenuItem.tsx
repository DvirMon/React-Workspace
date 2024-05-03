import { routes } from "@/app/routes";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalculateIcon from "@mui/icons-material/Calculate";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ListItem } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import QuizIcon from "@mui/icons-material/Quiz";
import Link from "next/link";
import { useMemo } from "react";

interface MenuItemProps {
  icon: JSX.Element;
  text: string;
  link: string;
  pathname?: string;
}

export default function MenuItem({
  icon,
  text,
  link,
  pathname,
}: MenuItemProps) {
  const isActive = useMemo(() => link === pathname, [link, pathname]);

  return (
    <Link href={link}>
      <ListItem disablePadding divider>
        <ListItemButton selected={isActive}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
}

const menuItems = [
  { icon: <DashboardIcon />, text: "Dashboard", link: routes.dashboard },
  { icon: <ShoppingCartIcon />, text: "Orders", link: routes.orders },
  { icon: <PeopleIcon />, text: "Customers", link: routes.customers },
  { icon: <BarChartIcon />, text: "Reports", link: routes.reports },
];

export const secondaryItems: MenuItemProps[] = [
  { icon: <Grid3x3Icon />, text: "Tic-Tac-Toe", link: routes.ticTacToe },
  { icon: <CalculateIcon />, text: "Calculator", link: routes.investment },
  { icon: <HourglassBottomIcon />, text: "Countdown", link: routes.countdown },
  {
    icon: <AppRegistrationIcon />,
    text: "Project Managing",
    link: routes.projectManaging,
  },
  {
    icon: <QuizIcon />,
    text: "Quizzz",
    link: routes.quizzz,
  },
];

export const mainListItems = (
  <>
    {menuItems.map(({ icon, text, link }, index) => (
      <Link href={link} key={index}>
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </Link>
    ))}
  </>
);

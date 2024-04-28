"use client";

import {
  AppBar,
  ThemeProvider,
  Toolbar,
  createTheme,
  styled,
} from "@mui/material";
import PageContainer from "../../ui/layout/Container";

import { usePathThemeActions } from "@/hooks/usePathTheme";
import { useEffect } from "react";
import "./theme.css";

const theme = createTheme({
  typography: {
    fontFamily: "Caprasimo",
  },

  palette: {
    primary: { main: "#fcd256" },
  },
});

const PageWrapper = styled(
  "div",
  {}
)(({ theme }) => ({
  height: "100%",
  background: `radial-gradient(circle at top, 
                rgba(241, 210, 70, 0.98),
                rgba(250, 176, 103, 0.87)
), url(bg-pattern-dark.png);`,
  backgroundRepeat: "repeat",
  backgroundSize: "100% 100%, 30% 30%, 100% 100%",
}));

export default function TicTacToeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setPathTheme } = usePathThemeActions();

  useEffect(() => {
    setPathTheme("ticTacToe");
  });

  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <AppBar>
          <Toolbar />
        </AppBar>
        <PageContainer>{children}</PageContainer>
      </PageWrapper>
    </ThemeProvider>
  );
}

"use client";

import MuiPaper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import styled from "@mui/material/styles/styled";
import PageContainer from "../ui/layout/Container";
import Image from "next/image";

import "./theme.css";

const theme = createTheme({
  typography: {
    fontFamily: "Caprasimo",
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
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <PageContainer>{children}</PageContainer>
      </PageWrapper>
    </ThemeProvider>
  );
}

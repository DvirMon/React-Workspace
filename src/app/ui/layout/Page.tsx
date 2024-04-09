"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}>
      <Toolbar />
      <Container
        maxWidth="lg"
        sx={{
          minWidth: "100%",
          height: "calc(100% - 64px)",
          pl: "0px !important",
          pr: "0px !important",
        }}>
        {children}
      </Container>
    </Box>
  );
}

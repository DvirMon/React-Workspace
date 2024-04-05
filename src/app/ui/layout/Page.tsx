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
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, minWidth: "100%" }}>
        {children}
      </Container>
    </Box>
  );
}

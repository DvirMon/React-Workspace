"use client";

import { Toolbar } from "@mui/material";
import Box from "@mui/material/Box";

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
        {children}
      {/* <Container  sx={{ mt: 1, mb: 1 }}>
      </Container> */}
    </Box>
  );
}

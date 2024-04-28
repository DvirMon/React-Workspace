"use client";
import "@/app/ui/globals.css";

import MuiBox from "@mui/material/Box";
import { roboto } from "@/app/ui/font";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import AppDrawer from "./ui/layout/Drawer";
import AppHeader from "./ui/layout/Toolbar";
import theme from "./ui/theme";
import Page from "./ui/layout/Page";

const PageContainer = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  height: "100%",
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
        suppressHydrationWarning={true}>
        <ThemeProvider theme={theme}>
          <PageContainer>
            <AppHeader setOpen={setOpen} isOpen={open} width={240} />
            <AppDrawer setOpen={setOpen} isOpen={open} width={240} />
            <Page>{children}</Page>
          </PageContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}

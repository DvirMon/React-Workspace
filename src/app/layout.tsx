"use client";
import "@/app/ui/globals.css";

import { roboto } from "@/app/ui/font";
import { usePathTheme } from "@/hooks/usePathTheme";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import MuiBox from "@mui/material/Box";
import { useState } from "react";
import AppDrawer from "./ui/layout/Drawer";
import Page from "./ui/layout/Page";
import AppToolbar from "./ui/layout/Toolbar";
import theme, { appThemes } from "./ui/theme";


const PageContainer = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  height: "100%",
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuWidth = 280;
  const pathTheme = usePathTheme();

  const [open, setOpen] = useState(true);

  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
        suppressHydrationWarning={true}>
        <ThemeProvider theme={appThemes[pathTheme] || theme}>
          <PageContainer>
            <AppToolbar setOpen={setOpen} isOpen={open} width={menuWidth} />
            <AppDrawer setOpen={setOpen} isOpen={open} width={menuWidth} />
            <Page>{children}</Page>
          </PageContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}

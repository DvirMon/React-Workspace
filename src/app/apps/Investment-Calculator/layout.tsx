"use client";

// import Typography from "@mui/material/Typography";
import { ThemeProvider, Typography, createTheme } from "@mui/material";
import Image from "next/image";

import PageContainer from "../../ui/layout/Container";
import "./theme.css";
import { useEffect } from "react";
import { usePathThemeActions } from "@/hooks/usePathTheme";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
  },
});

const Header = () => {
  return (
    <header className="w-full h-1/6 flex flex-col items-center justify-end gap-4">
      <Image
        height={100}
        width={100}
        src={"/investment-calculator-logo.png"}
        alt="investment-calculator-logo"></Image>

      <Typography variant="h5">Investment Calculator</Typography>
    </header>
  );
};

export default function InvestmentCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setPathTheme } = usePathThemeActions();

  useEffect(() => {
    setPathTheme("investment");
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="h-full investment-calculator">
        <PageContainer>
          <Header></Header>
          <div className="h-5/6">{children}</div>
        </PageContainer>
      </div>
    </ThemeProvider>
  );
}

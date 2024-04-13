"use client";

import createTheme from "@mui/material/styles/createTheme";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import PageContainer from "../../ui/layout/Container";
import "./theme.css";

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

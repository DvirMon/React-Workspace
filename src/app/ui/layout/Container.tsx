"use client";

import styled from "@emotion/styled";
import { Theme } from "@mui/material";
import MuiBox from "@mui/material/Box";

interface PageProps {
  children: React.ReactNode;
  className? : string
}

const Container = styled(MuiBox)<{ theme?: Theme }>(({ theme }) => ({
  height: "100%",
  width: "100%",
  overflow: "auto",
  paddingLeft: theme.spacing(7),
  paddingRight: theme.spacing(7),
}));



export default function PageContainer({
  children,
  className = 'page'
}: PageProps) {
  return <Container className={className}>{children}</Container>;
}

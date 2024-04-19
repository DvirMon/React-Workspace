"use client";

import styled from "@emotion/styled";
import { Theme } from "@mui/material";
import MuiBox from "@mui/material/Box";

const Container = styled(MuiBox)<{ theme?: Theme }>(({ theme }) => ({
  height: "100%",
  width: "100%",
  overflow: "auto",
  paddingLeft: theme.spacing(7),
  paddingRight: theme.spacing(7),
}));

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}

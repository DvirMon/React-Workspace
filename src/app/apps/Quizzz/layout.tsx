"use client";

import PageContainer from "@/app/ui/layout/Container";
import classes from "./layout.module.css";
import { usePathThemeActions } from "@/hooks/usePathTheme";

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setPathTheme } = usePathThemeActions();

  setPathTheme("quiz");

  return <PageContainer className={classes.page}>{children}</PageContainer>;
}

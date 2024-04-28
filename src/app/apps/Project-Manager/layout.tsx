"use client";

import PageContainer from "@/app/ui/layout/Container";
import { usePathThemeActions } from "@/hooks/usePathTheme";
import { ReactNode, useEffect } from "react";

export default function ProjectManagerLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { setPathTheme } = usePathThemeActions();

  useEffect(() => {
    setPathTheme("projectManaging");
  });

  return <PageContainer>{children}</PageContainer>;
}

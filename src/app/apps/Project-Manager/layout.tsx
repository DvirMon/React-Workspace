"use client";

import PageContainer from "@/app/ui/layout/Container";
import RouteGuard from "@/lib/route-guard";
import { ReactNode } from "react";
import { useHasProjects } from "./store/store";

export default function ProjectManagerLayout({
  children,
}: {
  children: ReactNode;
}) {
  const hasProjects = useHasProjects();

  return (
    <RouteGuard
      shouldRedirect={hasProjects}
      destination="/apps/Project-Manager/projects">
      <PageContainer>{children}</PageContainer>
    </RouteGuard>
  );
}

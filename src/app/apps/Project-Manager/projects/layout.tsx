"use client";

import RouteGuard from "@/lib/route-guard";
import React from "react";
import { useHasProjects } from "../store/store";
import { routes } from "../routes";

export default function ProjectManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasProjects = useHasProjects();

  return (
    <RouteGuard
      shouldRedirect={!hasProjects}
      shouldRender={hasProjects}
      destination={routes.root}>
      <div className="h-full">
        <header className="h-16"></header>
        <main className="flex justify-center">
          <article className="w-2/3">{children}</article>
        </main>
      </div>
    </RouteGuard>
  );
}

"use client";

import RouteGuard from "@/lib/route-guard";
import React from "react";
import { useHasProjects } from "../store/store";



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
      destination="/apps/Project-Manager">
      <div className="h-full">
        <header className="h-16"></header>
        <main className="flex justify-center">
          <article className="w-3/4">{children}</article>
        </main>
      </div>
    </RouteGuard>
  );
}

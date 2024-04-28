"use client";

import useGuard from "@/hooks/useGuard";
import React from "react";
import { useHasProjects } from "../store/store";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const hasProjects = useHasProjects();

  useGuard(!hasProjects, "/apps/Project-Manager");

  if (hasProjects) {
    return <>{children}</>;
  }
}

export default function ProjectManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RouteGuard>
      <div className="h-full">
        <header className="h-16"></header>
        <main className="flex justify-center">
          <article className="w-3/4">{children}</article>
        </main>
      </div>
    </RouteGuard>
  );
}

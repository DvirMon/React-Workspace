"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useHasProjects, useProjects } from "../store/store";

export default function ProjectManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const hasProjects = useHasProjects();

  useEffect(() => {
    if (!hasProjects) {
      router.push("/apps/Project-Manager");
    }
  }, [hasProjects]);

  if (hasProjects) {
    return (
      <div className="h-full">
        <header className="h-16"></header>
        <main className="flex justify-center">
          <article className="w-3/4">{children}</article>
        </main>
      </div>
    );
  }
}

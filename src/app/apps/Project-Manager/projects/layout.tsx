"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useHasProjects } from "../store/store";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const hasProjects = useHasProjects();

  console.log("called", hasProjects);

  useEffect(() => {
    if (!hasProjects) {
      router.push("/apps/Project-Manager");
    }
  }, [hasProjects, router]);

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

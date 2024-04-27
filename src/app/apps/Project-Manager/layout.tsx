"use client";

import PageContainer from "@/app/ui/layout/Container";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useHasProjects } from "./store/store";

export default function ProjectManagerLayout({ children }: { children: ReactNode }) {

  const hasProjects = useHasProjects();
  const router = useRouter();

  useEffect(() => {
    if (hasProjects) {
      router.push("/apps/Project-Manager/projects");
    }
  }, [hasProjects]);

  return <PageContainer>{children}</PageContainer>;
}

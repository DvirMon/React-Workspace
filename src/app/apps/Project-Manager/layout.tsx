"use client";

import PageContainer from "@/app/ui/layout/Container";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useHasProjects } from "./store/store";

const RouteGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const hasProjects = useHasProjects();

  useEffect(() => {
    if (hasProjects) {
      router.push("/apps/Project-Manager/projects");
    }
  }, [hasProjects]);

  if (!hasProjects) {
    return <>{children}</>;
  }
};
export default function ProjectManagerLayout({
  children,
}: {
  children: ReactNode;
  }) {
  
  return (
    <RouteGuard>
      <PageContainer>{children}</PageContainer>
    </RouteGuard>
  );
}

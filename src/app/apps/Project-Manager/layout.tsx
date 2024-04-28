"use client";

import PageContainer from "@/app/ui/layout/Container";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useHasProjects } from "./store/store";
import useGuard from "@/hooks/useGuard";

const RouteGuard = ({ children }: { children: React.ReactNode }) => {
  // const router = useRouter();
  const hasProjects = useHasProjects();

  useGuard(hasProjects, "/apps/Project-Manager/projects");

  // useEffect(() => {
  //   if (hasProjects) {
  //     router.push("/apps/Project-Manager/projects");
  //   }
  // }, [hasProjects]);

  return <>{children}</>;
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

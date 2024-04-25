import PageContainer from "@/app/ui/layout/Container";
import { ReactNode } from "react";

export default function ProjectManagerLayout({ children }: { children: ReactNode }) {
  return <PageContainer>{children}</PageContainer>;
}

"use client";

import PageContainer from "@/app/ui/layout/Container";
import { usePathThemeActions } from "@/hooks/usePathTheme";
import Image from "next/image";
import classes from "./layout.module.css";

const PageHeder = () => {
  const title = "REACT-QUIZ";

  return (
    <header
      className={"w-full h-1/5 flex flex-col items-center justify-end gap-4"}>
      <Image width={60} height={60} src={"/quiz-logo.png"} alt="quiz-logo" />
      <h1 className={classes.title}>{title}</h1>
    </header>
  );
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setPathTheme } = usePathThemeActions();

  setPathTheme("quiz");

  return (
    <PageContainer className={classes.page}>
      <PageHeder />
      <main className="flex-grow">{children}</main>
    </PageContainer>
  );
}

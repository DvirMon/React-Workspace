import PageContainer from "@/app/ui/layout/Container";
import classes from "./layout.module.css";

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageContainer className={classes.page}>{children}</PageContainer>;
}

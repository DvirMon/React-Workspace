import PageContainer from "@/app/ui/layout/Container";

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageContainer>{children}</PageContainer>;
}

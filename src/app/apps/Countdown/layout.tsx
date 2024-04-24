import PageContainer from "@/app/ui/layout/Container";
import { ReactNode } from "react";
import classes from "./layout.module.css";

const Header = () => {
  return (
    <header className={classes.title}>
      <h1>
        The <em>Almost</em> Final Countdown
      </h1>
      <p>Stop the timer once you estimate that time is (almost) up</p>
    </header>

  );
};

export default function CountdownLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PageContainer className={classes.page}>
      <div className={classes.content}>
        <Header />
        {children}
      </div>
    </PageContainer>
  );
}

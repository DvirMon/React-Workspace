import React from "react";

export default function ProjectManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <header className="h-16"></header>
      <main className="flex justify-center">
        <article className="w-3/4">{children}</article>
      </main>
    </div>
  );
}

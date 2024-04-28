"use client";

export default function NewProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row  h-full">
      <article className="w-full flex flex-col justify-center items-center h-full">
        {children}
      </article>
    </div>
  );
}

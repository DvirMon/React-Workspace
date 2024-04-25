"use client";

import { Button, Typography } from "@mui/material";

export default function ProjectManagerPage() {
  return (
    <div className="flex flex-col justify-center h-full">
      <section className="flex flex-col justify-center items-center gap-6">
        <Typography className="text-3xl">No Project Exist</Typography>
        <Button variant="contained" className="text-xl">
          <span className="p-2">Create New Project</span>
        </Button>
      </section>
    </div>
  );
}

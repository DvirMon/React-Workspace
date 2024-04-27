import { Button, TextField, Typography } from "@mui/material";
import TaskItem from "./project-task-item";
import { Task } from "../types";

interface TaskListProps {
  tasks: Task[];
}

export default function ProjectTasksList({ tasks }: TaskListProps) {

  return (
    <div className="w-full flex flex-col gap-8">
      <Typography variant="h3">Tasks</Typography>

      <form className="w-full flex  gap-4">
        <TextField />
        <Button>Add Task</Button>
      </form>

      <div className="w-1/3 flex flex-col">
        <TaskItem />
      </div>
    </div>
  );
}

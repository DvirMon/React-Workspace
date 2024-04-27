import { Button, TextField, Typography } from "@mui/material";
import TaskItem from "./project-task-item";
import { Task } from "../types";
import { FieldValues, useForm } from "react-hook-form";

interface TaskListProps {
  tasks: Task[];
  addNewTask: (task: Task) => void;
}

export default function ProjectTasksList({ tasks, addNewTask }: TaskListProps) {
  const { register, handleSubmit } = useForm<Task>();

  function onSubmit(data: FieldValues) {
    const task = { ...data, id: "" } as Task;
    addNewTask(task);
  }

  return (
    <div
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="w-full flex flex-col gap-8">
      <Typography variant="h3">Tasks</Typography>

      <form className="w-full flex gap-6">
        <TextField
          {...register("description")}
          name="description"
          label="new task"
          type="text"
          required
        />
        <Button type="submit" className="text-xl">
          Add New Task
        </Button>
      </form>

      <div className="w-1/3 flex flex-col gap-4">
        {tasks.map((task: Task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

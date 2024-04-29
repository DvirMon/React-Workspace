import { Button, TextField } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { Task } from "../../util/types";

interface TasksFormProps {
  onAddTask: (task: Task) => void;
}

export default function ProjectTaskForm({ onAddTask }: TasksFormProps) {
  const { register, handleSubmit } = useForm<Task>();

  function onSubmit(data: FieldValues) {
    const task = { ...data, id: "" } as Task;
    onAddTask(task);
  }

  return (
    <form
      className="w-full flex justify-between"
      onSubmit={handleSubmit((data) => onSubmit(data))}>
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
  );
}

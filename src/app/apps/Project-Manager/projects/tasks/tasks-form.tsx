import { Button, TextField } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { Task } from "../../util/types";

interface TasksFormProps {
  onAddTask: (task: Task) => void;
}

export default function ProjectTaskForm({ onAddTask }: TasksFormProps) {
  const { register, handleSubmit, reset } = useForm<Task>();

  function onSubmit(data: FieldValues) {
    const task = { ...data } as Task;
    onAddTask(task);
    reset();
  }

  return (
    <form
      className="w-full flex justify-between"
      onSubmit={handleSubmit((data) => onSubmit(data))}>
      <section className="w-3/4">
        <TextField
          {...register("description")}
          fullWidth
          multiline
          minRows={3}
          name="description"
          label="Add new task"
          type="text"
          required
        />
      </section>
      <Button type="submit" variant="contained" className="text-lg self-center">
        Add New Task
      </Button>
    </form>
  );
}

import { Button, TextField, Typography } from "@mui/material";
import TaskItem from "./project-task-item";
import { Task } from "../../util/types";
import { FieldValues, useForm } from "react-hook-form";

interface TaskListProps {
  tasks: Task[];
  onAddTask: (task: Task) => void;
  onClearTask: (indexToDelete: number) => void;
}

export default function ProjectTasksList({
  tasks,
  onAddTask,
  onClearTask,
}: TaskListProps) {
  const { register, handleSubmit } = useForm<Task>();

  function onSubmit(data: FieldValues) {
    const task = { ...data, id: "" } as Task;
    onAddTask(task);
  }

  return (
    <div
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="w-1/2 flex flex-col gap-8">
      <Typography variant="h3">Tasks</Typography>

      <form className="w-full flex justify-between">
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

      <div className="flex flex-col gap-4">
        {tasks.map((task: Task, index) => (
          <TaskItem
            key={task.id}
            task={task}
            onClear={() => onClearTask(index)}
          />
        ))}
      </div>
    </div>
  );
}

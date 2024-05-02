import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Task } from "../../util/types";

interface ProjectTaskProps {
  task: Task;
  onDelete: () => void;
  onUpdateTask: (task: Task) => void;
}

function isDescriptionEquals(task1: Task, task2: Task): boolean {
  return task1.description.trim() === task2.description.trim();
}
function isDescriptionEmpty(task: Task): boolean {
  return task.description === "";
}

export default function ProjectTaskItem({
  task,
  onDelete,
  onUpdateTask,
}: ProjectTaskProps) {
  const [isEdit, setEdit] = useState(false);
  const [taskState, setTaskState] = useState(task);
  const { register, reset } = useForm({ defaultValues: task });

  function handleDelete() {
    onDelete();
  }

  function handleEdit() {
    setEdit(() => true);
  }

  function handleChange(value: string) {
    setTaskState((task) => ({ ...task, description: value }));
  }

  function handleSave() {
    if (isDescriptionEmpty(taskState)) {
      onDelete();
    } else if (!isDescriptionEquals(taskState, task)) {
      onUpdateTask(taskState);
    }

    setEdit(() => false);
  }

  function handleCancel() {
    reset(task);
    setEdit(() => false);
  }

  return (
    <Card className="flex justify-between">
      <CardContent className="w-full">
        {!isEdit ? (
          <Typography gutterBottom>{task.description}</Typography>
        ) : (
          <TextField
            {...register("description", {
              onChange: (e) => handleChange(e.target.value),
            })}
            fullWidth
            multiline
            minRows={3}
            name="description"
            type="text"
          />
        )}
      </CardContent>
      <CardActions className="items-start">
        {isEdit ? (
          <>
            <Button variant="outlined" onClick={handleSave}>
              Save
            </Button>

            <Button variant="text" onClick={handleCancel}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <IconButton aria-label="edit" onClick={handleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </>
        )}
      </CardActions>
    </Card>
  );
}

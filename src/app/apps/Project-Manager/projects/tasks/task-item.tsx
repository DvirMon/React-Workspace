import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Task } from "../../util/types";
import { useState } from "react";

interface TaskProps {
  task: Task;
  onClear: () => void;
}

export default function ProjectTaskItem({ task, onClear }: TaskProps) {
  const [isEdit, setEdit] = useState(false);

  const { id, description } = task;

  function handleClear() {
    onClear();
  }

  function handleEdit() {
    setEdit((val) => !val);
  }

  return (
    <Card className="flex justify-between">
      <CardContent className="w-full">
        {!isEdit ? (
          <Typography gutterBottom>{description}</Typography>
        ) : (
          <TextField
            fullWidth
            multiline
            minRows={3}
            defaultValue={description}
          />
        )}
      </CardContent>
      <CardActions>
        <IconButton aria-label="edit" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleClear}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

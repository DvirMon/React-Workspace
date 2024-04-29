import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { Task } from "../../util/types";

interface TaskProps {
  task: Task;
  onClear: () => void;
}

export default function ProjectTaskItem({ task, onClear }: TaskProps) {
  const { id, description } = task;

  function handleClear() {
    onClear();
  }

  return (
    <Card className="flex justify-between">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {description}{" "}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleClear}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

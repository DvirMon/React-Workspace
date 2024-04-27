import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Task } from "../types";

interface TaskProps {
  task: Task;
  onClear: () => void;
}

export default function TaskItem({ task, onClear }: TaskProps) {
  const { id, description } = task;

  function handleClear() {
    onClear();
  }

  return (
    <Card className="flex justify-between" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {description}{" "}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={handleClear}>
          Clear
        </Button>
      </CardActions>
    </Card>
  );
}

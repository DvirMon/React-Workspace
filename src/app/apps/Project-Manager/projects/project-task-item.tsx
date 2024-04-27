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
}

export default function TaskItem({ task }: TaskProps) {
  const { id, description } = task;
  return (
    <Card className="flex justify-between" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {description}{" "}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Clear</Button>
      </CardActions>
    </Card>
  );
}

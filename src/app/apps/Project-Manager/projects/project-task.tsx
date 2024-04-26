import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

const TaskItem = () => {
  return (
    <Card className="flex justify-between" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Word of the Day
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Clear</Button>
      </CardActions>
    </Card>
  );
};

export default function ProjectTask() {
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

import {
  Button,
  TextField,
  Typography
} from "@mui/material";
import { useProjectStore } from "../store";
import TaskItem from "./project-task-item";



export default function ProjectTasksList() {

  const tasks = useProjectStore((store) => store.projects)

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

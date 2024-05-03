import {
  useCurrentProjectTasks,
  useProjectActions
} from "../../store/store";
import { Task } from "../../util/types";
import ProjectTaskItem from "./task-item";

export default function ProjectTasksList() {
  console.log("tasks-list called");

  const { deleteTaskFromProject, updateProjectTasks } = useProjectActions();

  const tasks: Task[] = useCurrentProjectTasks();

  function handleUpdateTask(task: Task): void {
    updateProjectTasks(task);
  }

  function handleDeleteTask(indexToDelete: number): void {
    deleteTaskFromProject(indexToDelete);
  }
  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task: Task, index) => (
        <ProjectTaskItem
          key={task.id}
          task={task}
          onDelete={() => handleDeleteTask(index)}
          onUpdateTask={handleUpdateTask}
        />
      ))}
    </div>
  );
}

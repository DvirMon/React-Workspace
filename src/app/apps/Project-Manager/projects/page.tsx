"use client";

import { Divider } from "@mui/material";
import {
  useDisplayProject,
  useProjectActions,
  useProjects,
} from "../store/store";
import { Project, Task } from "../types";
import ProjectInfo from "./project-info";
import ProjectTasksList from "./project-tasks-list";
import Sidebar from "./sidebar";

export default function ProjectsPage() {
  const projects = useProjects();
  const displayProject = useDisplayProject();

  const { updateProjects } = useProjectActions();

  const tasks = displayProject.tasks;

  function addTaskToProject(task: Task) {
    const newTasks = [...displayProject.tasks, { ...task }];
    const updateProject = { ...displayProject, tasks: newTasks };
    updateProjects(updateProject);
  }


  function setTasks(newTask: Task) {
    return [...displayProject.tasks, { ...newTask }];
  }

  function setProject(project: Project, tasks: Task[]) {
    return { ...project, ...tasks };
  }

  return (
    <div className="flex flex-row h-full">
      <nav className="w-1/4 flex flex-col justify-start p-4">
        <Sidebar projects={projects} />
      </nav>
      <article className="w-full flex flex-col gap-4 h-full p-4">
        <ProjectInfo {...displayProject} />
        <Divider />
        <ProjectTasksList tasks={tasks} addTaskToProject={addTaskToProject} />
      </article>
    </div>
  );
}

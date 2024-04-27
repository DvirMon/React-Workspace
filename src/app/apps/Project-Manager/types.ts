import dayjs from "dayjs";

export interface Project {
  id : string
  title: string;
  description: string;
  dueDate: dayjs.Dayjs;
  tasks: string[];
}

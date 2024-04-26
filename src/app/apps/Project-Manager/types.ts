import dayjs from "dayjs";

export interface Project  {
    title: string;
    description: string;
    dueDate: dayjs.Dayjs;
  }
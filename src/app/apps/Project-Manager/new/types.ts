import dayjs from "dayjs";


export interface FormData {
  title: string;
  description: string;
  dueDate: dayjs.Dayjs;
}

export type ValidFieldNames = "title" | "description" | "dueDate";


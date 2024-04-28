import { InputFieldProps } from "@/app/ui/Form/input-field";
import { DateFieldProps } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export const FORM_INPUTS: InputFieldProps[] = [
    { label: "Title", type: "text", name: "title", required: true },
    {
      label: "Description",
      multiline: true,
      minRows: 3,
      type: "text",
      name: "description",
      required: true,
    },
    {
      label: "Due Date",
      type: "date",
      name: "dueDate",
      required: true,
    } as DateFieldProps<dayjs.Dayjs>,
  ];
  
  export const DEFAULT_VALUES = {
    description: "",
    title: "",
    dueDate: dayjs(new Date()),
  };
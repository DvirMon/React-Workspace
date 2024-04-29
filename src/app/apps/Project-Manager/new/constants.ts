import { DateFieldProps } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { FormData } from "./types";
import { DefaultValues } from "react-hook-form";
import { FormFieldProps } from "@/app/ui/Form/types";

export const FORM_INPUTS: FormFieldProps[] = [
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

export const DEFAULT_VALUES: DefaultValues<FormData> = {
  title: "",
  description: "",
  dueDate: dayjs(new Date()),
};

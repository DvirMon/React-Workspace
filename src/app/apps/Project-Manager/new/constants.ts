import { InputFieldProps } from "@/app/ui/Form/types";
import { DateFieldProps } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { DefaultValues } from "react-hook-form";
import { FormData } from "./types";
import { z, ZodType } from "zod";

export const FORM_INPUTS: InputFieldProps[] = [
  { label: "Title", type: "text", name: "title", required: true },
  {
    label: "Description",
    multiline: true,
    minRows: 3,
    type: "text",
    name: "description",
  },
  {
    label: "Due Date",
    type: "date",
    name: "dueDate",
  } as DateFieldProps<Dayjs>,
];

export const DEFAULT_VALUES: DefaultValues<FormData> = {
  title: "",
  description: "",
  dueDate: dayjs(new Date()),
};

export const NewProjectScheme: ZodType<FormData> = z
  .object({
    title: z.string().min(1, { message: "required field" }),
    description: z.string().min(1, { message: "required field" }),
    dueDate: z.custom<Dayjs>((val) => val instanceof dayjs, "Invalid date"),
  })
  .required();

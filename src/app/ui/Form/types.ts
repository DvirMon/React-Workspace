import { TextFieldProps } from "@mui/material";
import { DatePickerProps } from "@mui/x-date-pickers";
import { Control, FieldError, FieldErrors } from "react-hook-form";

export type InputFieldProps = TextFieldProps | DatePickerProps<any>;

export interface FormFieldProps {
  props: InputFieldProps;
  control: Control<any, any>;
  error: FieldError;
}

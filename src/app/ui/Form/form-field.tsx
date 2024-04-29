import { TextField, TextFieldProps } from "@mui/material";
import {
  DatePickerProps,
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Controller } from "react-hook-form";
import { FormFieldProps } from "./types";

const InputWrapper = ({ children }: { children: React.ReactNode }) => {
  return <section className="w-full flex flex-col">{children}</section>;
};

export default function FormField({ props, control, error }: FormFieldProps) {
  const { type, name } = props as TextFieldProps;

  const hasError = !!error

  switch (type) {
    case "date":
      return (
        <InputWrapper>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              render={({ field }) => (
                <DesktopDatePicker
                  {...field}
                  {...(props as DatePickerProps<dayjs.Dayjs>)}
                />
              )}
              control={control}
              name={name as string}
            />
          </LocalizationProvider>
        </InputWrapper>
      );
    default:
      return (
        <InputWrapper>
          <Controller
            render={({ field }) => (
              <TextField
                type={type}
                error={hasError}
                helperText={error?.message}
                fullWidth
                variant="outlined"
                {...field}
                {...(props as TextFieldProps)}
              />
            )}
            control={control}
            name={name as string}
          />
        </InputWrapper>
      );
  }
}

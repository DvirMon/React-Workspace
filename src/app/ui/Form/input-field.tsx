import {
  StandardTextFieldProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import {
  DatePickerProps,
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Control, Controller, ControllerProps } from "react-hook-form";

export type InputFieldProps = TextFieldProps | DatePickerProps<any>;

const InputWrapper = ({ children }: { children: React.ReactNode }) => {
  return <section className="w-1/2 flex flex-col">{children}</section>;
};

export default function InputField({
  props,
  control,
}: {
  props: InputFieldProps;
  control: Control<any, any>;
}) {
  const { type, label, name } = props as TextFieldProps;

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
    case "number":
      return (
        <InputWrapper>
          <Controller
            render={({ field }) => (
              <TextField
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
    default:
      return (
        <InputWrapper>
          <Controller
            render={({ field }) => (
              <TextField
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

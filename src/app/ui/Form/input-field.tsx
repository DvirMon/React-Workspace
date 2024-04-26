import { TextField, TextFieldProps } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
    Control,
    Controller,
    ControllerProps,
    FieldValues
} from "react-hook-form";

const InputWrapper = ({ children }: { children: React.ReactNode }) => {
  return <section className="w-1/2">{children}</section>;
};

export default function InputField({
  props,
  control,
  controlProps,
}: {
  props: TextFieldProps;
  control: Control<FieldValues, any>;
  controlProps: ControllerProps;
}) {
  const { type, label } = props;
  const { name } = controlProps;

  switch (type) {
    case "date":
      return (
        <InputWrapper>
          <label>{label}</label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker />
            <Controller
              control={control}
              name={name}
              render={({ field }) => <DesktopDatePicker {...field} />}
            />
          </LocalizationProvider>
        </InputWrapper>
      );
    default:
      return (
        <InputWrapper>
          <label>{label}</label>
          <Controller
            control={control}
            name={name}
            render={({ field }) => (
              <TextField fullWidth variant="outlined" {...props} {...field} />
            )}
          />
        </InputWrapper>
      );
  }
}

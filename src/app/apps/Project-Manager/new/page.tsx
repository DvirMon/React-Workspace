"use client";

import TextField, { TextFieldProps } from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { FieldValues, UseFormRegister, useForm } from "react-hook-form";

interface ProjectForm extends FieldValues {
  title: string;
  description: string;
  dueDate: Date;
}

const InputWrapper = ({ children }: { children: React.ReactNode }) => {
  return <section className="w-1/2">{children}</section>;
};

function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider>
  );
}

const formInputs: TextFieldProps[] = [
  { label: "Title", type: "text" },
  { label: "Description", multiline: true, minRows: 3, type: "text" },
];

export default function NewPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectForm>();

  return (
    <div className="flex flex-col justify-center h-full">
      <form className="flex flex-col justify-center items-center gap-6">
        {formInputs.map((props, index) => (
          <InputWrapper key={index}>
            <label>{props.label}</label>
            <TextField fullWidth variant="outlined" {...props}></TextField>
          </InputWrapper>
        ))}
        <InputWrapper>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker />
          </LocalizationProvider>
        </InputWrapper>
        {/* <InputWrapper>
          <TextField
            fullWidth
            variant="outlined"
            multiline
            minRows={3}
            label="description"></TextField>
        </InputWrapper>
        <InputWrapper>
          <TextField fullWidth variant="outlined" label="title"></TextField>
        </InputWrapper> */}
      </form>
    </div>
  );
}

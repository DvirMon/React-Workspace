"use client";

import InputField, { InputFieldProps } from "@/app/ui/Form/input-field";
import { Button } from "@mui/material";
import { DateFieldProps } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface ProjectForm extends FieldValues {
  title: string;
  description: string;
  dueDate: dayjs.Dayjs;
}

const formInputs: InputFieldProps[] = [
  { label: "Title", type: "text", name: "title" },
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
  } as DateFieldProps<dayjs.Dayjs>,
];

export default function NewPage() {
  const [data, setData] = useState<ProjectForm>({
    description: "",
    title: "",
    dueDate: dayjs(new Date()),
  } as ProjectForm);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectForm>({ defaultValues: data });

  function onSubmit(formData: ProjectForm) {
    setData((value) => ({ ...value, ...formData }));
  }

  function handleReset() {
    reset();
  }

  return (
    <div className="flex flex-col justify-center h-full">
      <form
        className="flex flex-col justify-center items-center gap-6"
        onSubmit={handleSubmit((val) => onSubmit(val))}>
        <section className="flex justify-end w-1/2">
          <Button type="button" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </section>

        {formInputs.map((props, index) => (
          <InputField key={props.name} control={control} props={props} />
        ))}
      </form>
    </div>
  );
}

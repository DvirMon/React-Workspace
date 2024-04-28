import InputField, { InputFieldProps } from "@/app/ui/Form/input-field";
import { Button } from "@mui/material";
import { DateFieldProps } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { Project } from "../util/types";

interface ProjectFormProps {
  setProjects: (data: Project) => void;
}

const formInputs: InputFieldProps[] = [
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

const defaultValues = {
  description: "",
  title: "",
  dueDate: dayjs(new Date()),
};

export default function ProjectForm({ setProjects }: ProjectFormProps) {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Project>({ defaultValues });

  function onSubmit(formData: Project) {
    setProjects(formData);
  }

  function handleReset() {
    reset();
  }

  return (
    <form
      className="w-full flex flex-col justify-center items-center gap-6"
      onSubmit={handleSubmit((val) => onSubmit(val))}>
      {formInputs.map((props) => (
        <InputField key={props.name} control={control} props={props} />
      ))}
      <footer className="w-full flex flex-row justify-end gap-4">
        <Button className="text-2xl" type="button" onClick={handleReset}>
          Reset
        </Button>
        <Button className="text-2xl" variant="contained" type="submit">
          Submit
        </Button>
      </footer>
    </form>
  );
}

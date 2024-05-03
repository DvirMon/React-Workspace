import FormField from "@/app/ui/Form/form-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import { FieldError, useForm } from "react-hook-form";
import { Project } from "../util/types";
import { DEFAULT_VALUES, FORM_INPUTS, NewProjectScheme } from "./constants";

interface ProjectFormProps {
  defaultValues?: Partial<Project>;
  onSubmit: (data: Project) => void;
  onCancel: () => void;
}

export default function ProjectForm({
  onSubmit,
  onCancel,
  defaultValues = DEFAULT_VALUES,
}: ProjectFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Project>({
    mode: "onBlur",
    defaultValues,
    resolver: zodResolver(NewProjectScheme),
  });

  return (
    <form
      className="w-full flex flex-col justify-center items-center gap-6"
      onSubmit={handleSubmit((val) => onSubmit(val))}>
      {FORM_INPUTS.map((props) => (
        <FormField
          key={props.name}
          control={control}
          props={props}
          error={errors[props.name as keyof Project] as FieldError}
        />
      ))}
      <footer className="w-full flex flex-row justify-end gap-4">
        <Button className="text-xl " type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button className="text-xl" variant="contained" type="submit">
          Submit
        </Button>
      </footer>
    </form>
  );
}

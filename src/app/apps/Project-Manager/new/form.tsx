import FormField from "@/app/ui/Form/form-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldError, useForm } from "react-hook-form";
import { DEFAULT_VALUES, FORM_INPUTS, NewProjectScheme } from "./constants";
import { Project } from "../util/types";

interface ProjectFormProps {
  setProjects: (data: Project) => void;
}

export default function ProjectForm({ setProjects }: ProjectFormProps) {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Project>({
    mode: "onBlur",
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(NewProjectScheme),
  });

  function onSubmit(formData: Project) {
    setProjects(formData);
  }

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
        <Button
          className="text-2xl "
          type="button"
          onClick={() => router.back()}>
          Cancel
        </Button>
        <Button className="text-2xl" variant="contained" type="submit">
          Submit
        </Button>
      </footer>
    </form>
  );
}

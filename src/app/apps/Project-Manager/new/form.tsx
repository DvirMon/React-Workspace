import FormField from "@/app/ui/Form/form-field";
import { Button, Link } from "@mui/material";
import { FieldError, useForm } from "react-hook-form";
import { routes } from "../routes";
import { DEFAULT_VALUES, FORM_INPUTS, NewProjectScheme } from "./constants";
import { FormData } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

interface ProjectFormProps {
  setProjects: (data: FormData) => void;
}

export default function ProjectForm({ setProjects }: ProjectFormProps) {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(NewProjectScheme),
  });

  function onSubmit(formData: FormData) {
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
          error={errors[props.name as keyof FormData] as FieldError}
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

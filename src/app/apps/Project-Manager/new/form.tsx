import FormField from "@/app/ui/Form/input-field";
import { Button, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import { routes } from "../routes";
import { DEFAULT_VALUES, FORM_INPUTS } from "./constants";
import { FormData } from "./types";

interface ProjectFormProps {
  setProjects: (data: FormData) => void;
}

export default function ProjectForm({ setProjects }: ProjectFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: DEFAULT_VALUES });

  function onSubmit(formData: FormData) {
    setProjects(formData);
  }

  return (
    <form
      className="w-full flex flex-col justify-center items-center gap-6"
      onSubmit={handleSubmit((val) => onSubmit(val))}>
      {FORM_INPUTS.map((props) => (
        <FormField key={props.name} control={control} props={props} />
      ))}
      <footer className="w-full flex flex-row justify-end gap-4">
        <Link href={routes.root}>
          <Button className="text-2xl " type="button">
            Cancel
          </Button>
        </Link>
        <Button className="text-2xl" variant="contained" type="submit">
          Submit
        </Button>
      </footer>
    </form>
  );
}

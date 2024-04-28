import InputField from "@/app/ui/Form/input-field";
import { Button, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import { routes } from "../routes";
import { Project } from "../util/types";
import { DEFAULT_VALUES, FORM_INPUTS } from "./constants";

interface ProjectFormProps {
  setProjects: (data: Project) => void;
}

export default function ProjectForm({ setProjects }: ProjectFormProps) {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Project>({ defaultValues: DEFAULT_VALUES });

  function onSubmit(formData: Project) {
    setProjects(formData);
  }

  return (
    <form
      className="w-full flex flex-col justify-center items-center gap-6"
      onSubmit={handleSubmit((val) => onSubmit(val))}>
      {FORM_INPUTS.map((props) => (
        <InputField key={props.name} control={control} props={props} />
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

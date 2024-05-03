import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import ProjectForm from "../../new/project-form";
import { Project } from "../../util/types";

export interface ProjectsDialogProps {
  open: boolean;
  data: Partial<Project>;
  onClose: () => void;
  onSubmit: (data: Partial<Project>) => void;
}

export default function ProjectDialog({
  open,
  data,
  onSubmit,
  onClose,
}: ProjectsDialogProps) {
  
  function handleClose() {
    onClose();
  }

  return (
    <Dialog maxWidth={"sm"} fullWidth={true} onClose={handleClose} open={open}>
      <DialogTitle>Edit Project</DialogTitle>

      <DialogContent className="p-0">
        <Box className="p-5">
          <ProjectForm
            defaultValues={data}
            onSubmit={onSubmit}
            onCancel={handleClose}
          />
        </Box>
      </DialogContent>
      {/* <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Update</Button>
      </DialogActions> */}
    </Dialog>
  );
}

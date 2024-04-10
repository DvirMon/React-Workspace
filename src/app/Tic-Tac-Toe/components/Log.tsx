import { Typography } from "@mui/material";
import { Turn } from "../types";

interface LogProps {
  turns: Turn[];
}

export default function Log({ turns }: LogProps) {
  const title = "Logs";

  return (
    <div className="flex flex-col items-center gap-3">
      <Typography variant="h4">{title}</Typography>

      {turns.map(({ player }, index) => (
        <Typography key={index} variant="h6">
          Selected : {player}
        </Typography>
      ))}
    </div>
  );
}

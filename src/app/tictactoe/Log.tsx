import { Typography } from "@mui/material";
import { Turn } from "./types";

export default function Log({ turns }: { turns: Turn[] }) {
  const title = "Logs";

  return (
    <div className="w-1/5 flex flex-col items-center gap-3">
      <Typography variant="h4">{title}</Typography>
      {turns.map(({ player }, index) => (
        <Typography key={index} variant="h6">
          Selected : {player}
        </Typography>
      ))}
    </div>
  );
}

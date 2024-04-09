import { Typography } from "@mui/material";
import { Turn } from "./types";

export default function Log({ turns }: { turns: Turn[] }) {
  const title = "Logs";

  return (
    <div>
      <Typography variant="h4">{title}</Typography>
      {turns.map(({ player }, index) => (
        <Typography key={index} variant="h6">
          Selected : {player}
        </Typography>
      ))}
    </div>
  );
}

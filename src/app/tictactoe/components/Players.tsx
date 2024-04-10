import { Typography } from "@mui/material";
import clsx from "clsx";
import "./players.css";

interface PlyersPros {
  players: { [key: string]: string };
  activePlayer: string;
}

function PlayerTab({
  name,
  symbol,
  isActive,
}: {
  name: string;
  symbol: string;
  isActive: boolean;
}) {
  return (
    <li
      className={clsx("flex grow justify-center p-4 gap-6", {
        "border border-yellow-300 transition duration-300": isActive,
      })}>
      <Typography variant="h4">{name} :</Typography>
      <Typography variant="h4">{symbol} </Typography>
    </li>
  );
}

export default function Players({ players, activePlayer }: PlyersPros) {
  const keys = Object.keys(players);

  return (
    <ol className="text-white flex justify-between text-2xl w-3/4">
      {keys.map((symbol, index) => (
        <PlayerTab
          key={index}
          name={players[symbol]}
          symbol={symbol}
          isActive={activePlayer.toLowerCase() === symbol.toLowerCase()}
        />
      ))}
    </ol>
  );
}

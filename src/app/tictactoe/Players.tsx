import { Typography, styled } from "@mui/material";
import clsx from "clsx";
import "./players.css";
import { Player } from "./types";

interface PlyersPros {
  players: Player[];
  activePlayer: string;
}

function PlayerTab({
  name,
  move,
  isActive,
  index,
}: {
  name: string;
  move: string;
  isActive: boolean;
  index: number;
}) {
  return (
    <li
      className={clsx("flex grow justify-center p-4 gap-6", {
        "border border-yellow-300 transition duration-300": isActive,
      })}>
      <Typography variant="h4">
        {name} {++index} :
      </Typography>
      <Typography variant="h4">{move} </Typography>
    </li>
  );
}

export default function Players({ players, activePlayer }: PlyersPros) {
  return (
    <ol className="text-white flex justify-between text-2xl w-3/4">
      {players.map((player: Player, index) => (
        <PlayerTab
          key={index}
          {...player}
          isActive={activePlayer.toLowerCase() === player.move.toLowerCase()}
          index={index}
        />
      ))}
    </ol>
  );
}

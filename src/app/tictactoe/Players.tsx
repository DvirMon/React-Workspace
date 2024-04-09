import { styled } from "@mui/material";
import clsx from "clsx";
import "./players.css";
import { Player } from "./types";

interface PlyersPros {
  players: Player[];
  activePlayer: string;
}

const ListItem = styled("li")(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  justifyContent: "center",
  gap: theme.spacing(4),
}));

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
        'border border-yellow-300 transition duration-300': isActive,
      })}>
      <span>
        {name} {++index} :
      </span>
      <span>{move} </span>
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

import React from "react";
import { Player, PlyersPros } from "./types";

function PlayerTab({
  name,
  move,
  index,
}: {
  name: string;
  move: string;
  index: number;
}) {
  return (
    <li className="flex grow justify-center gap-6">
      <span>
        {name} {++index} :
      </span>
      <span>{move} </span>
    </li>
  );
}

export default function Players({ players }: PlyersPros) {
  return (
    <ol className="text-white flex justify-between text-2xl w-3/4">
      {players.map((player: Player, index) => (
        <PlayerTab key={index} {...player} index={index} />
      ))}
    </ol>
  );
}

import { TextField, Typography } from "@mui/material";
import clsx from "clsx";
import "./players.css";
import { useState } from "react";

interface PlyersPros {
  players: { [key: string]: string };
  activePlayer: string;
}

function PlayerName({
  defaultValue,
  isEditable,
}: {
  defaultValue: string;
  isEditable: boolean;
}) {
  if (isEditable) {
    return (
      <TextField
        autoFocus
        sx={{
          backgroundColor: "#46432f",
          input: {
            color: "white",
            fontSize: (theme) => theme.spacing(3),
            padding: (theme) => theme.spacing(2),
          },
        }}
        defaultValue={defaultValue}
      />
    );
  }

  return (
    <Typography sx={{ padding: (theme) => theme.spacing(2) }} variant="h5">
      {defaultValue}
    </Typography>
  );
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
  const [isEditable, setEdit] = useState(false);

  function handleEdit() {
    setEdit((value) => !value);
  }

  return (
    <li
      className={clsx("flex w-80 h-20 items-center justify-between p-4 gap-6", {
        "border border-yellow-300 transition duration-300": isActive,
      })}>
      <div className="w-44">
        <PlayerName defaultValue={name} isEditable={isEditable} />
      </div>
      <Typography className="flex grow" variant="h5">
        {symbol}{" "}
      </Typography>

      <button className="w-16" onClick={handleEdit}>
        {isEditable ? "Save" : "Edit"}
      </button>
    </li>
  );
}

export default function Players({ players, activePlayer }: PlyersPros) {
  const keys = Object.keys(players);

  return (
    <ol className="text-white w-full flex justify-between items-center text-2xl">
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

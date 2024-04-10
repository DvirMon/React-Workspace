import { TextField, Typography } from "@mui/material";
import clsx from "clsx";
import { ChangeEvent, useEffect, useState } from "react";
import "./players.css";

interface PlayerNameProps {
  value: string;
  isEditable: boolean;
  handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
}

interface PlayerTabProps {
  name: string;
  symbol: string;
  isActive: boolean;
  onChangeName: (symbol: string, playerName: string) => void;
}

function PlayerName({ handleChange, value, isEditable }: PlayerNameProps) {
  if (isEditable) {
    return (
      <TextField
        autoFocus
        value={value}
        onChange={(event) => handleChange(event)}
        sx={{
          backgroundColor: "#46432f",
          input: {
            color: "white",
            fontSize: (theme) => theme.spacing(3),
            padding: (theme) => theme.spacing(2),
          },
        }}
      />
    );
  }

  return (
    <Typography sx={{ padding: (theme) => theme.spacing(2) }} variant="h5">
      {value}
    </Typography>
  );
}

export default function PlayerTab({
  name,
  symbol,
  isActive,
  onChangeName,
}: PlayerTabProps) {
  const [playerName, setPlayerName] = useState(name);

  const [isEditable, setEdit] = useState(false);

  function handleEdit() {
    setEdit((value) => !value);

    if (isEditable) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setPlayerName(event.target.value);
  }

  useEffect(() => {
    setPlayerName(name);
  }, [name]);

  return (
    <li
      className={clsx("flex w-80 h-20 items-center justify-between p-4 gap-6", {
        "border border-yellow-300 transition duration-300": isActive,
      })}>
      <div className="w-44">
        <PlayerName
          value={playerName}
          isEditable={isEditable}
          handleChange={handleChange}
        />
      </div>
      <Typography className="flex grow" variant="h5">
        {symbol}
      </Typography>

      <button className="w-16" onClick={handleEdit}>
        {isEditable ? "Save" : "Edit"}
      </button>
    </li>
  );
}

import { Typography } from "@mui/material";

interface BoardProps {
  board: string[][];
  onSelectSquare: (rowIndex: number, cellIndex: number) => void;
}

export default function GameBoard({ board, onSelectSquare }: BoardProps) {
  function handleSelectSquare(rowIndex: number, cellIndex: number) {
    onSelectSquare(rowIndex, cellIndex);
  }

  return (
    <ol className="flex flex-col justify-center items-center gap-4">
      {board.map((row, rowIndex) => (
        <li key={rowIndex} className="flex gap-4">
          {row.map((cell, cellIndex) => (
            <button
              disabled={!!cell}
              style={{ background: "#aca788", fontWeight: 400 }}
              onClick={() => handleSelectSquare(rowIndex, cellIndex)}
              key={cellIndex}
              className="w-32 h-32 flex justify-center items-center">
              <Typography sx={{ color: "#3f3b00" }} className="text-7xl">
                {cell}
              </Typography>
            </button>
          ))}
        </li>
      ))}
    </ol>
  );
}

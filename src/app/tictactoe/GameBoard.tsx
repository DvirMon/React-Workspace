import { useState } from "react";

interface BoardProps {
  activePlayer : string,
  onSelectSquare: (rowIndex: number, cellIndex: number) => void;
}

const initialGameState: string[][] = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

export default function GameBoard({ onSelectSquare, activePlayer }: BoardProps) {
  const [gameState, setGameState] = useState(initialGameState);

  function updateGameState(
    state: string[][],
    rowIndex: number,
    cellIndex: number,
    nextMove: string
  ) {
    const newState = [...state.map((row) => [...row])];

    newState[rowIndex][cellIndex] = nextMove;

    return newState;
  }

  function handleSelectSquare(rowIndex: number, cellIndex: number) {
    if (!gameState[rowIndex][cellIndex]) {
      
      setGameState((value) =>
        updateGameState(value, rowIndex, cellIndex, activePlayer)
      );

      onSelectSquare(rowIndex, cellIndex);
    }
  }

  return (
    <ol className="flex flex-col justify-center items-center gap-4">
      {gameState.map((row, rowIndex) => (
        <li key={rowIndex} className="flex gap-4">
          {row.map((cell, cellIndex) => (
            <button
              style={{ background: "#aca788", fontWeight: 400 }}
              onClick={() => handleSelectSquare(rowIndex, cellIndex)}
              key={cellIndex}
              className="w-32 h-32 flex justify-center items-center text-7xl">
              {cell}
            </button>
          ))}
        </li>
      ))}
    </ol>
  );
}

import { Turn } from "./types";

interface BoardProps {
  turns: Turn[];
  onSelectSquare: (rowIndex: number, cellIndex: number) => void;
  checkWinning: (gameTurns: Turn[], board: string[][]) => boolean;
}

const initialGameState: string[][] = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function handleGameState(initState: string[][], turns: Turn[]) {
  const newState = initState.map((innerArray) => [...innerArray]);
  for (const turn of turns) {
    const { square, player } = turn;
    const { rowIndex, cellIndex } = square;
    newState[rowIndex][cellIndex] = player;
  }
  return newState;
}

export default function GameBoard({
  turns,
  onSelectSquare,
  checkWinning,
}: BoardProps) {
  const gameState = handleGameState(initialGameState, turns);

  function handleSelectSquare(rowIndex: number, cellIndex: number) {
    onSelectSquare(rowIndex, cellIndex);
  }

  const isWinning = checkWinning(turns, gameState);

  return (
    <ol className="flex flex-col justify-center items-center gap-4">
      {gameState.map((row, rowIndex) => (
        <li key={rowIndex} className="flex gap-4">
          {row.map((cell, cellIndex) => (
            <button
              disabled={!!cell || isWinning}
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

interface BoardProps {
  board: string[][];
  isWinning: boolean;
  onSelectSquare: (rowIndex: number, cellIndex: number) => void;
}

export default function GameBoard({
  board,
  isWinning,
  onSelectSquare,
}: BoardProps) {
  function handleSelectSquare(rowIndex: number, cellIndex: number) {
    onSelectSquare(rowIndex, cellIndex);
  }

  return (
    <ol className="flex flex-col justify-center items-center gap-4">
      {board.map((row, rowIndex) => (
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

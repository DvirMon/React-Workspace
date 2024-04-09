interface BoardProps {
  matrix: string[][];
  onClick: (rowIndex: number, colIndex: number) => void;
}

export default function GameBoard({ matrix, onClick }: BoardProps) {
  return (
    <ol className="flex flex-col justify-center items-center gap-4">
      {matrix.map((row, rowIndex) => (
        <li key={rowIndex} className="flex gap-4">
          {row.map((cell, cellIndex) => (
            <button
              style={{ background: "#aca788", fontWeight: 400 }}
              onClick={() => onClick(rowIndex, cellIndex)}
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

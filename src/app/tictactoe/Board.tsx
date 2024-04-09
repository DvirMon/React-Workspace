interface BoardProps {
  matrix: string[][];
  onClick: (rowIndex: number, colIndex: number) => void;
}

export default function TicTacToeBoard({ matrix, onClick }: BoardProps) {
  return (
    <div className="flex flex-col justify-center items-center bg-black w-80 h-80 gap-4">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-4">
          {row.map((cell, cellIndex) => (
            <section
              onClick={() => onClick(rowIndex, cellIndex)}
              key={cellIndex}
              className="bg-slate-400 h-20 w-20 flex justify-center items-center text-4xl cursor-pointer">
              {cell}
            </section>
          ))}
        </div>
      ))}
    </div>
  );
}

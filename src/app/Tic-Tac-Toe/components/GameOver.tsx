import React from "react";
import "./game-over.css";

interface MessageProps {
  winner: string;
  hasWinner: boolean;
}

interface GameOverProps extends MessageProps {
  onClick: () => void;
}

function Message({ winner, hasWinner }: MessageProps) {
  if (hasWinner) {
    return <p>{winner} won!</p>;
  }

  return <p>It&apos;s a Draw</p>;
}

export default function GameOver({
  hasWinner,
  winner,
  ...props
}: GameOverProps) {
  return (
    <div className="game-over gap-12">
      <h2>Game Over!</h2>
      <Message hasWinner={hasWinner} winner={winner} />
      <button {...props}>Rematch</button>
    </div>
  );
}

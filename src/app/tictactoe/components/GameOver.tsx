import React from "react";
import "./game-over.css";

function Message({ hasWinner }: { hasWinner: boolean }) {
  if (hasWinner) {
    return <p>won!</p>;
  }

  return <p>It&apos;s a Draw</p>;
}

export default function GameOver({
  hasWinner,
  ...props
}: {
    hasWinner: boolean;
    onClick : () => void
}) {
  return (
    <div className="game-over gap-12">
      <h2>Game Over!</h2>
      <Message hasWinner={hasWinner} />
      <button {...props}>Rematch</button>
    </div>
  );
}

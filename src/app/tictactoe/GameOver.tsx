import React from "react";
import "./game-over.css";

export default function GameOver({ ...props }) {
  return (
    <div className="game-over">
      <h2>Game Over!</h2>
      <button {...props}>Rematch</button>
    </div>
  );
}

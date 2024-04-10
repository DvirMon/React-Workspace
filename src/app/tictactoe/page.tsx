"use client";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Log from "./components/Log";
import Players from "./components/Players";
import { GAME_STATE } from "./constants";
import { Turn } from "./types";

import { BoardWrapper, Header } from "./layout";
import "./page.css";
import {
  computeActivePlay,
  getWinner,
  handleGameState,
  isDraw,
  isWinner,
  updateGameTurns,
} from "./page.helpers";

export default function TicTacToe() {
  const [gameTurns, setGamesTurns] = useState<Turn[]>([]);
  const [players, setPlayers] = useState({ x: "Player 1", o: "Player 2" });

  const activePlayer = computeActivePlay(gameTurns);
  const gameState = handleGameState(GAME_STATE, gameTurns);
  const hasWinner = isWinner(gameTurns, gameState);
  const hasDraw = isDraw(gameTurns, hasWinner);
  const winner = getWinner(gameTurns, players);

  function handleSelectSquare(rowIndex: number, cellIndex: number) {
    setGamesTurns((state) => updateGameTurns(state, rowIndex, cellIndex));
  }

  function handleRematch() {
    setGamesTurns(() => []);
  }

  function handleSave(symbol: string, playerName: string) {
    setPlayers((value) => ({ ...value, [symbol]: playerName }));
  }

  return (
    <div className="h-full flex justify-center">
      <section className="h-full">
        <Header />

        <BoardWrapper>
          <Players
            players={players}
            activePlayer={activePlayer}
            handleSave={handleSave}
          />

          <GameBoard board={gameState} onSelectSquare={handleSelectSquare} />
          <Button
            onClick={handleRematch}
            variant="contained"
            className="text-3xl">
            Rematch
          </Button>
          {(hasWinner || hasDraw) && (
            <GameOver hasWinner={hasWinner} onClick={handleRematch} winner={winner} />
          )}
        </BoardWrapper>
      </section>
      <section className="w-1/5">
        <header className="h-1/4"></header>
        <Log turns={gameTurns} />
      </section>
    </div>
  );
}
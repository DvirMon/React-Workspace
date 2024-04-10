"use client";

import Button from "@mui/material/Button";
import { useState } from "react";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Log from "./components/Log";
import PlayerTab from "./components/Players";
import { GAME_STATE, PLAYERS } from "./constants";
import { Symbol, Turn } from "./types";

import { BoardWrapper, Header } from "./layout";
import "./page.css";
import {
  computeActivePlay,
  computeWinner,
  computeGameState,
  computeHasDraw,
  computeHasWinner,
  updateGameTurns,
} from "./page.helpers";


export default function TicTacToe() {
  const [gameTurns, setGamesTurns] = useState<Turn[]>([]);
  const [players, setPlayers] =
    useState<Record<Symbol, string>>(PLAYERS);

  const activePlayer = computeActivePlay(gameTurns);
  const gameState = computeGameState(GAME_STATE, gameTurns);
  const hasWinner = computeHasWinner(gameTurns, gameState);
  const hasDraw = computeHasDraw(gameTurns, hasWinner);
  const winner = computeWinner(gameTurns, players);
  const participants = Object.keys(players) as Symbol[];

  function handleSelectSquare(rowIndex: number, cellIndex: number) {
    setGamesTurns((state) => updateGameTurns(state, rowIndex, cellIndex));
  }

  function handleRematch() {
    setGamesTurns(() => []);
    setPlayers(() => ({ ...PLAYERS }));
  }

  function onChangeName(symbol: string, playerName: string) {
    setPlayers((value) => ({ ...value, [symbol]: playerName }));
  }

  return (
    <div className="h-full flex justify-center">
      <section className="h-full">
        <Header />

        <BoardWrapper>
          <ol className="text-white w-full flex justify-between items-center text-2xl">
            {participants.map((symbol, index) => (
              <PlayerTab
                key={index}
                name={players[symbol]}
                symbol={symbol}
                isActive={activePlayer.toLowerCase() === symbol.toLowerCase()}
                onChangeName={onChangeName}
              />
            ))}
          </ol>

          <GameBoard board={gameState} onSelectSquare={handleSelectSquare} />
          <Button
            onClick={handleRematch}
            variant="contained"
            className="text-3xl">
            Rematch
          </Button>
          {(hasWinner || hasDraw) && (
            <GameOver
              hasWinner={hasWinner}
              onClick={handleRematch}
              winner={winner}
            />
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

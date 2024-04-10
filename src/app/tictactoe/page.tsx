"use client";

import { Button, ThemeProvider, createTheme, styled } from "@mui/material";
import MuiPaper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";
import AppContainer from "../ui/layout/Container";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Log from "./components/Log";
import Players from "./components/Players";
import { GAME_STATE } from "./constants";
import { Turn } from "./types";

import "./page.css";
import {
  computeActivePlay,
  getWinner,
  handleGameState,
  isDraw,
  isWinner,
  updateGameTurns,
} from "./page.helpers";

const theme = createTheme({
  typography: {
    fontFamily: "Caprasimo",
  },
});

const PageWrapper = styled(
  "div",
  {}
)(({ theme }) => ({
  height: "100%",
  background: `radial-gradient(circle at top, 
                rgba(241, 210, 70, 0.98),
                rgba(250, 176, 103, 0.87)
), url(bg-pattern-dark.png);`,
  backgroundRepeat: "repeat",
  backgroundSize: "100% 100%, 30% 30%, 100% 100%",
}));

const BoardWrapper = styled(MuiPaper)(({ theme }) => ({
  position: "relative",
  background: "linear-gradient(#383624, #282617)",
  width: "45rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(3),
  gap: theme.spacing(4),
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
}));

const players = { x: "Player 1", o: "Player 2" };

export default function TicTacToe() {
  const [gameTurns, setGamesTurns] = useState<Turn[]>([]);

  const activePlayer = computeActivePlay(gameTurns);
  const gameState = handleGameState(GAME_STATE, gameTurns);
  const hasWinner = isWinner(gameTurns, gameState);
  const hasDraw = isDraw(gameTurns, hasWinner);
  const winner = getWinner(gameTurns);

  function handleSelectSquare(rowIndex: number, cellIndex: number) {
    setGamesTurns((state) => updateGameTurns(state, rowIndex, cellIndex));
  }

  function handleRematch() {
    setGamesTurns(() => []);
  }

  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <AppContainer>
          <div className="h-full flex justify-center">
            <section className="h-full">
              <header className="w-full h-1/4 flex flex-col justify-center items-center gap-4">
                <Image
                  src="/game-logo.png"
                  width={100}
                  height={100}
                  alt="logo img"
                />
                <Typography sx={{ color: "#3f3b00" }} variant="h2">
                  Tic-Tac-Toe
                </Typography>
              </header>

              <BoardWrapper>
                <Players players={players} activePlayer={activePlayer} />

                <GameBoard
                  board={gameState}
                  onSelectSquare={handleSelectSquare}
                />
                <Button
                  onClick={handleRematch}
                  variant="contained"
                  className="text-3xl">
                  Rematch
                </Button>
                {(hasWinner || hasDraw) && (
                  <GameOver hasWinner={hasWinner} onClick={handleRematch} />
                )}
              </BoardWrapper>
            </section>
            <section className="w-1/5">
              <header className="h-1/4"></header>
              <Log turns={gameTurns} />
            </section>
          </div>
        </AppContainer>
      </PageWrapper>
    </ThemeProvider>
  );
}

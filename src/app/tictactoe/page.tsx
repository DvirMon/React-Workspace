"use client";

import { Button, ThemeProvider, createTheme, styled } from "@mui/material";
import MuiPaper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";
import { caprasimo } from "../ui/font";
import AppContainer from "../ui/layout/Container";
import GameBoard from "./GameBoard";
import Log from "./Log";
import Players from "./Players";
import { Plays, Symbols, Turn } from "./types";
import { WINNING_COMBINATIONS } from "./constants";

const theme = createTheme({
  typography: {
    fontFamily: "Caprasimo",
    h4: {
      fontWeight: 700,
    },
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

const players = [
  { name: "Player", move: "X" },
  { name: "Player", move: "O" },
];

function computeActivePlay(gameTurns: Turn[]): Plays {
  let newPlay: Plays = "x";

  if (gameTurns[0]) {
    const { player } = gameTurns[0] as Turn;
    newPlay = player === "x" ? "o" : "x";
  }

  return newPlay;
}

function updateGameTurns(
  oldState: Turn[],
  rowIndex: number,
  cellIndex: number
) {
  const player = computeActivePlay(oldState);

  const newState = [
    {
      square: { rowIndex, cellIndex },
      player,
    } as Turn,
    ...oldState,
  ];

  return newState;
}

function checkWinning(gameTurns: Turn[], board: string[][]): boolean {
  let isWinning = false;

  if (gameTurns.length >= 5) {
    for (const combination of WINNING_COMBINATIONS) {
      const firstSquare = board[combination[0].row][combination[0].column];
      const secondSquare = board[combination[1].row][combination[1].column];
      const thirdSquare = board[combination[2].row][combination[2].column];

      isWinning =
        firstSquare != "" &&
        firstSquare === secondSquare &&
        secondSquare === thirdSquare;

      if (isWinning) {
        break;
      }
    }
  }

  return isWinning;
}

export default function TicTacToe() {
  const [gameTurns, setGamesTurns] = useState<Turn[]>([]);

  const activePlayer = computeActivePlay(gameTurns);

  function handleSelectSquare(rowIndex: number, cellIndex: number) {
    setGamesTurns((state) => updateGameTurns(state, rowIndex, cellIndex));
  }

  function handleStartOver() {
    setGamesTurns(() => []);
  }

  return (
    <ThemeProvider theme={theme}>
      <PageWrapper className={`${caprasimo.className} antialiased`}>
        <AppContainer>
          <header className="w-full flex flex-col justify-center items-center gap-4 h-1/4">
            <Image
              src="/game-logo.png"
              width={100}
              height={100}
              alt="logo img"
            />
            <Typography className="font-bold" variant="h2">
              Tic-Tac-Toe
            </Typography>
          </header>

          <article className="flex justify-center gap-8">
            <BoardWrapper>
              <Players players={players} activePlayer={activePlayer} />
              <GameBoard
                turns={gameTurns}
                onSelectSquare={handleSelectSquare}
                checkWinning={checkWinning}
              />
              <Button
                onClick={handleStartOver}
                variant="contained"
                className="text-4xl">
                Start Over
              </Button>
            </BoardWrapper>
            <Log turns={gameTurns} />
          </article>
        </AppContainer>
      </PageWrapper>
    </ThemeProvider>
  );
}

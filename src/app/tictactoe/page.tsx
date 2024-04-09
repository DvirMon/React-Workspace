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
import { GAME_STATE, WINNING_COMBINATIONS } from "./constants";
import GameOver from "./GameOver";

import './page.css'

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
  if (gameTurns.length < 5) {
    return false;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const [first, second, third] = combination.map(
      ({ row, column }) => board[row][column]
    );

    if (first !== "" && first === second && second === third) {
      return true;
    }
  }

  return false;
}

function handleGameState(initState: string[][], turns: Turn[]) {
  const newState = initState.map((innerArray) => [...innerArray]);
  for (const turn of turns) {
    const { square, player } = turn;
    const { rowIndex, cellIndex } = square;
    newState[rowIndex][cellIndex] = player;
  }
  return newState;
}

export default function TicTacToe() {
  const [gameTurns, setGamesTurns] = useState<Turn[]>([]);

  const activePlayer = computeActivePlay(gameTurns);
  const gameState = handleGameState(GAME_STATE, gameTurns);
  const isWinning = checkWinning(gameTurns, gameState);

  function handleSelectSquare(rowIndex: number, cellIndex: number) {
    setGamesTurns((state) => updateGameTurns(state, rowIndex, cellIndex));
  }

  function handleStartOver() {
    setGamesTurns(() => []);
  }

  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <AppContainer>
          <header className="w-full flex flex-col justify-center items-center gap-4 h-1/4">
            <Image
              src="/game-logo.png"
              width={100}
              height={100}
              alt="logo img"
            />
            <Typography variant="h2">Tic-Tac-Toe</Typography>
          </header>

          <article className="flex justify-center gap-8">
            <BoardWrapper>
              <Players players={players} activePlayer={activePlayer} />

              <GameBoard
                board={gameState}
                isWinning={isWinning}
                onSelectSquare={handleSelectSquare}
              />
              <Button
                onClick={handleStartOver}
                variant="contained"
                className="text-3xl">
                Start Over
              </Button>
              {isWinning && <GameOver onClick={handleStartOver} />}
            </BoardWrapper>
            <Log turns={gameTurns} />
          </article>
        </AppContainer>
      </PageWrapper>
    </ThemeProvider>
  );
}

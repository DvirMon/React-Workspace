"use client";

import { ThemeProvider, createTheme, styled } from "@mui/material";
import MuiPaper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";
import { caprasimo } from "../ui/font";
import AppContainer from "../ui/layout/Container";
import GameBoard from "./GameBoard";
import Players from "./Players";
import { Moves, Symbols } from "./types";

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

export default function TicTacToe() {
  const [activePlayer, setActivePlayer] = useState(Moves.MOVE_X);
  const [movesLog, setMovesLog] = useState([] as Moves[]);

  function handleSelectSquare() {
    setMovesLog((value) => [...value, activePlayer]);
    setActivePlayer((value) => value ^ (1 as Moves));
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

          <div className="flex justify-center gap-8">
            <BoardWrapper>
              <Players players={players} />
              <GameBoard
                onSelectSquare={handleSelectSquare}
                activePlayer={activePlayer}
              />
            </BoardWrapper>

            <div>
              <Typography variant="h4">Moves</Typography>
              {movesLog.map((move, index) => (
                <Typography key={index} variant="h6">
                  Selected : {Symbols[move]}
                </Typography>
              ))}
            </div>
          </div>
        </AppContainer>
      </PageWrapper>
    </ThemeProvider>
  );
}

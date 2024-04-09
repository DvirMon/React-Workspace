"use client";

import { styled } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import AppContainer from "../ui/layout/Container";
import TicTacToeBoard from "./Board";
import { Moves, Symbols } from "./types";

const ContentWrapper = styled(
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

const matrix: string[][] = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function matrixIndexToArrayIndex(
  rowIndex: number,
  cellIndex: number,
  size: number
) {
  return rowIndex * size + cellIndex;
}

function DisplayObject({ data }: { data: unknown }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default function TicTacToe() {
  const [movesMap, setMovesMap] = useState({} as { [key: number]: string });
  const [movesLog, setMovesLog] = useState([] as Moves[]);
  const [movesMatrix, setMovesMatrix] = useState(matrix);

  function handleMoves(moves: Moves[]) {
    const lastMove = moves[moves.length - 1];
    return (lastMove || 0) ^ (1 as Moves);
  }

  function onClick(rowIndex: number, cellIndex: number) {
    const index = matrixIndexToArrayIndex(rowIndex, cellIndex, matrix.length);

    if (!movesMap[index]) {
      const nextMove = handleMoves(movesLog);
      setMovesLog((value) => [...value, nextMove]);
      setMovesMap((value) => ({ ...value, [index]: Symbols[nextMove] }));

      const newMatrix = movesMatrix.map((row, i) =>
        i === rowIndex
          ? row.map((cell, j) => (cellIndex === j ? Symbols[nextMove] : cell))
          : row
      );

      setMovesMatrix(newMatrix);
    }
  }

  return (
    <ContentWrapper>
      <AppContainer>
        <Toolbar></Toolbar>
        <Typography
          className="font-bold"
          variant="h2"
          sx={{
            fontFamily: "Caprasimo",
          }}>
          Tic-Tac-Toe
        </Typography>

        <div className="flex justify-center gap-8">
          <DisplayObject data={movesMatrix}></DisplayObject>

          <TicTacToeBoard matrix={movesMatrix} onClick={onClick} />
          <div>
            <Typography
              className="font-bold"
              variant="h4"
              sx={{
                fontFamily: "Caprasimo",
              }}>
              Moves
            </Typography>
            {movesLog.map((move, index) => (
              <Typography
                key={index}
                className="font-bold"
                variant="h6"
                sx={{
                  fontFamily: "Caprasimo",
                }}>
                Selected : {Symbols[move]}
              </Typography>
            ))}
          </div>
        </div>
      </AppContainer>
    </ContentWrapper>
  );
}

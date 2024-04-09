import { inter } from "../ui/font";

export enum Moves {
  MOVE_X = 0,
  MOVE_O = 1,
}

export type Plays = "x" | "o";

export const Symbols: { [key: number]: Plays } = {
  [Moves.MOVE_X]: "x",
  [Moves.MOVE_O]: "o",
};

export interface Player {
  name: string;
  move: string;
}

export interface Turn {
  square: { rowIndex: number; cellIndex: number };
  player: string;
}

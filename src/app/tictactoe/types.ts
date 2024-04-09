export enum Moves {
  MOVE_X = 1,
  MOVE_O = 0,
}

export type Plays = "x" | "o";

export const Symbols: { [key: number]: Plays } = {
  [Moves.MOVE_X]: "x",
  [Moves.MOVE_O]: "o",
};

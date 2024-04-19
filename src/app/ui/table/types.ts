import { GridValidRowModel } from "@mui/x-data-grid";
import { GridBaseColDef } from "@mui/x-data-grid/internals";

export interface Columns<T> extends GridBaseColDef {
  key: keyof T;
  format: string;
}

export interface Row extends GridValidRowModel {}

export type FieldFormats = { [key: string]: string };

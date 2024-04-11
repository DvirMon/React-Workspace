import React from "react";
import { Investment } from "../util/types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { getTypedKeys } from "@/lib/utils";

export default function InvestmentTable({ state }: { state: Investment[] }) {
  const fields = Object.keys(state[0]);

  const columns = fields.map(
    (field) => ({ field, headerName: field.toUpperCase() } as GridColDef)
  );

  const rows = [...state.map((item) => ({ ...item }))];

  const keys: (keyof Investment)[] = getTypedKeys(state[0]);
  return (
    <TableContainer className="result">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            {columns.map((col, index) => (
              <TableCell  key={index}>{col.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              {keys.map((key, index) => (
                <TableCell key={index} component="th" scope="row">
                  {row[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import React from "react";
import { InvestmentData } from "../util/types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { GridColDef } from "@mui/x-data-grid";
import { getTypedKeys, toTitleCase } from "@/lib/utils";

export default function InvestmentTable({
  state,
}: {
  state: InvestmentData[];
  }) {
  
  const fields = [
    "year",
    "interestValue",
    "interest",
    "totalInterest",
    "investedCapital",
  ];

  const columns = fields.map(
    (field) => ({ field, headerName: toTitleCase(field) } as GridColDef)
  );
  
  const rows = [...state.map((item) => ({ ...item }))];

  const keys: (keyof InvestmentData)[] = getTypedKeys(state[0]);
  return (
    <TableContainer className="result">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((col, index) => (
              <TableCell key={index}>{col.headerName}</TableCell>
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

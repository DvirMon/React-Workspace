import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import { DataGrid, GridValidRowModel } from "@mui/x-data-grid";
import { GridApiCommunity } from "@mui/x-data-grid/internals";
import { MutableRefObject } from "react";
import { Columns, FieldFormats } from "./types";
import { v4 as uuidv4 } from "uuid";

import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridSlots,
} from '@mui/x-data-grid';

function CellData<T>({
  col,
  row,
}: {
  col: Columns<T>;
  row: GridValidRowModel;
}) {
  const { valueGetter, valueFormatter, field } = col;

  let data = row[field];

  if (valueGetter) {
    data = valueGetter(
      row[field] as never,
      row,
      col,
      {} as MutableRefObject<GridApiCommunity>
    );
  }

  if (valueFormatter) {
    data = valueFormatter(row[field] as never, row, col, {} as any);
  }
  return <>{data}</>;
}

function getRowId() {
  return uuidv4();
}

export default function MuiTable<Row extends GridValidRowModel>({
  rows,
  columns,
}: {
  rows: Row[];
  columns: Columns<Row>[];
}) {
  const formats: FieldFormats = {
    interest: "currency",
    interestValue: "currency",
    totalInterest: "currency",
  };

  return (
    <TableContainer className="result">
      <DataGrid
        rows={rows}
        getRowId={getRowId}
        columns={columns}
        initialState={{
          columns: {
            columnVisibilityModel: {
              id: false,
            },
          },
        }}
      />
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
              {columns.map((col, index) => (
                <TableCell key={index} component="th" scope="row">
                  <CellData col={col} row={row} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

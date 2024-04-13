import { getTypedKeys, toTitleCase } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import { GridValidRowModel } from "@mui/x-data-grid";
import { GridBaseColDef } from "@mui/x-data-grid/internals";
import { formatText, mapData } from "../util/helpers";
import { InvestmentData, InvestmentDataTable } from "../util/types";

interface Columns<T> extends GridBaseColDef {
  key: keyof T;
  format: string;
}

type FieldFormats = { [key: string]: string };

function CellData<T>({
  col,
  row,
}: {
  col: Columns<T>;
  row: GridValidRowModel;
}) {
  const { format, valueFormatter, field } = col;

  let data = row[field];

  if (valueFormatter) {
    data = valueFormatter(row[field] as never, row, col, {} as any);
  }
  return <>{data}</>;
}

export default function InvestmentTable({ state }: { state: InvestmentData }) {
  const formats: FieldFormats = {
    interest: "currency",
    interestValue: "currency",
    totalInterest: "currency",
  };

  const rows: InvestmentDataTable[] = mapData(state);

  const fields = rows[0] ? getTypedKeys(rows[0]) : [];

  const columns = fields.map(
    (field) =>
      ({
        key: field,
        field,
        valueFormatter: (value, row, col) => {
          return formatText(formats[col.field], value);
        },
        format: formats[field],
        headerName: toTitleCase(field),
        flex: 1,
      } as Columns<InvestmentDataTable>)
  );

  return (
    <TableContainer className="result">
      {/* <DataGrid
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
      /> */}
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

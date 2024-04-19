import MuiTable from "@/app/ui/table/table";
import { Columns, FieldFormats } from "@/app/ui/table/types";
import { getTypedKeys, toTitleCase } from "@/lib/utils";
import { formatText, mapData } from "../util/helpers";
import { InvestmentData, InvestmentDataTable } from "../util/types";

import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridSlots,
} from '@mui/x-data-grid';

export default function InvestmentTable({ state }: { state: InvestmentData }) {
  
  const formats: FieldFormats = {
    interest: "currency",
    interestValue: "currency",
    totalInterest: "currency",
  };

  const rows: InvestmentDataTable[] = mapData(state);

  const fields = rows[0] ? getTypedKeys(rows[0]) : [];

  const columns: Columns<InvestmentDataTable>[] = fields.map(
    (field) =>
      ({
        key: field,
        field,
        valueFormatter: (value, row, col) => {
          return formatText(formats[col.field], value);
      },
        editable : true,
        format: formats[field],
        headerName: toTitleCase(field),
        flex: 1,
      } as Columns<InvestmentDataTable>)
  );

  return <MuiTable rows={rows} columns={columns} />;
}

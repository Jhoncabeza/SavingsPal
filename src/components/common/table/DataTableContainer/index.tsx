import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
} from "@mui/material";
import { StyledTableCell } from "../styles/styles";
import { IColumn, IRow } from "../../../../types";
import NoDataRow from "./NoDataRow/NoDataRow";

const renderTextCell = (_value: string) => (
  <StyledTableCell>{_value}</StyledTableCell>
);

const renderSwitchCell = (_value: boolean, column: IColumn, cedula: number) => {
  return (
    <StyledTableCell>
      <Switch
        checked={_value}
        onClick={() => {
          if (typeof column.handleSwitchState === "function") {
            column.handleSwitchState(cedula, !_value);
          }
        }}
      />
    </StyledTableCell>
  );
};

const RenderRowData = (column: IColumn, _value: string, _row: IRow) => {
  switch (column.type) {
    case "text":
      return renderTextCell(_value);
    case "switch":
      return renderSwitchCell(
        _value === "true",
        column,
        Number(_row["cedula"])
      );
    default:
      return renderTextCell(_value);
  }
};

const DataTableContainer = ({
  columns,
  data,
  handleRowClick,
  title,
}: {
  columns: IColumn[];
  data: IRow[];
  handleRowClick: (row: IRow) => void;
  title: string;
}) => {
  return (
    <TableContainer>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell key={column.id}>{column.label}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            cursor: "pointer",
          }}
        >
          {Array.isArray(data) && data.length > 0 ? (
            data.map((_row, index) => {
              return (
                <TableRow
                  key={index}
                  onClick={(
                    _event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
                  ) => {
                    if (_event.target instanceof HTMLTableCellElement) {
                      const cellData = _event.target.textContent;
                      if (cellData) {
                        handleRowClick(_row);
                      }
                    }
                  }}
                >
                  {columns.map((_column) => {
                    const cellData = _row[_column.id]
                      ? _row[_column.id].toString()
                      : "";
                    return RenderRowData(_column, cellData, _row);
                  })}
                </TableRow>
              );
            })
          ) : (
            <NoDataRow columns={columns} title={title} />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTableContainer;

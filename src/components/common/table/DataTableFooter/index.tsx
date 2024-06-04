import { TableFooter, TablePagination } from "@mui/material";

const DataTableFooter = () => {
  return (
    <TableFooter>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        labelRowsPerPage="Filas por página:"
        count={0}
        rowsPerPage={10}
        page={1}
        onPageChange={() => {}}
        onRowsPerPageChange={() => {}}
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} de ${count}`
        }
      />
    </TableFooter>
  );
};

export default DataTableFooter;

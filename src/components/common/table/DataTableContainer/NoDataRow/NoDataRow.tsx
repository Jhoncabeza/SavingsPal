import React from "react";
import { TableRow, TableCell } from "@mui/material";
import styled from "styled-components";
import { IColumn } from "../../../../../types";

const StyledTableCell = styled(TableCell)`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  padding: 20px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EmptyStateIcon = styled.div`
  font-size: 48px;
  margin-bottom: 10px;
  color: #ffffff;
`;

const EmptyStateText = styled.div`
  font-size: 16px;
  color: #da5a51;
`;

interface Column {
  columns: IColumn[];
  title: string;
}

const NoDataRow: React.FC<Column> = ({ columns, title }) => {
  return (
    <TableRow>
      <StyledTableCell colSpan={columns.length}>
        <EmptyStateContainer>
          <EmptyStateIcon>📦</EmptyStateIcon>
          <EmptyStateText>
            No se encontraron {title.toLowerCase()} disponibles
          </EmptyStateText>
        </EmptyStateContainer>
      </StyledTableCell>
    </TableRow>
  );
};

export default NoDataRow;

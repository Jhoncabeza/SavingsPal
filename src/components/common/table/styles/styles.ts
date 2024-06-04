import { Paper } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import styled from "styled-components";

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#000231",
    color: "white",
    textAlign: "center",
    padding: "1%",
    "&:first-of-type": {
      borderTopLeftRadius: "10px",

      borderBottomLeftRadius: "10px",
    },
    "&:last-of-type": {
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "10px",
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    textAlign: "center",
    padding: "1%",
  },
}));

export const StyledPaper = styled(Paper)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "&.MuiPaper-root": {
    boxShadow: "none",
  },
}));

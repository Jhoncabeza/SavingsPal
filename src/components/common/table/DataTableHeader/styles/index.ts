import { Typography } from "@mui/material";
import styled from "styled-components";

export const StyledTypography = styled(Typography)(() => ({
  color: "#DA5A51",
  "&.MuiTypography-root": {
    marginTop: "2%",
    fontWeight: "bolder",
  },
}));

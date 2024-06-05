import styled from "styled-components";
import { Paper, Typography } from "@mui/material";

export const StyledCardContainer = styled(Paper)(() => ({
  width: "30%",
  height: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
}));

export const TextOverlay = styled(Typography)(() => ({
  textAlign: "center",
  color: "black",
  fontSize: "20px",
}));

export const Logo = styled("img")({
  height: 100,
  width: 100,
});

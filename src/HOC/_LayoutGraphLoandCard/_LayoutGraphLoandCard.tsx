import React from "react";
import { Grid, Typography } from "@mui/material";
import { Logo, StyledCardContainer, TextOverlay } from "./styles/styles";

interface ILayoutCardProps {
  title: string;
  overlayText: string;
}

const _LayoutGraphLoandCard: React.FC<ILayoutCardProps> = ({
  title,
  overlayText,
}) => {
  return (
    <StyledCardContainer sx={{ borderRadius: "30px" }}>
      <Grid container direction="column">
        {title && (
          <Grid item xs={12} margin={2}>
            <Typography variant="h5">{title}</Typography>
          </Grid>
        )}
        <Grid item xs={12} margin={2}>
          <TextOverlay variant="h4" sx={{ fontWeight: "bolder" }}>
            {overlayText}k
          </TextOverlay>
        </Grid>
      </Grid>
      <Grid item xs={4} container>
        <Logo alt="Dinero" src="Dinero.png" />
      </Grid>
    </StyledCardContainer>
  );
};

export default _LayoutGraphLoandCard;

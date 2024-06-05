import React from "react";
import { Grid, Typography } from "@mui/material";
import { StyledCardContainer, TextOverlay } from "./styles/styles";

interface ILayoutCardProps {
  children: React.ReactNode;
  title: string;
  overlayText: string;
}

const _LayoutGraphMoneyCard: React.FC<ILayoutCardProps> = ({
  children,
  title,
  overlayText,
}) => {
  return (
    <StyledCardContainer>
      {title && (
        <Grid item xs={12}>
          <Typography
            variant="h6"
            sx={{ color: "#DA5A51", fontWeight: "bolder" }}
          >
            {title}
          </Typography>
        </Grid>
      )}
      {children}
      <TextOverlay>{overlayText}</TextOverlay>
    </StyledCardContainer>
  );
};

export default _LayoutGraphMoneyCard;

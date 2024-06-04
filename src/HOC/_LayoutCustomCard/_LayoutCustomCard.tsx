import React from "react";
import { Grid, Typography } from "@mui/material";
import { StyledCardContainer } from "./styles/styles";

interface ILayoutCardProps {
  children: React.ReactNode;
  title: string;
}

const _LayoutCustomCard: React.FC<ILayoutCardProps> = ({ children, title }) => {
  return (
    <StyledCardContainer>
      {title && (
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{ color: "#DA5A51", fontWeight: "bolder" }}
          >
            {title}
          </Typography>
        </Grid>
      )}
      {children}
    </StyledCardContainer>
  );
};

export default _LayoutCustomCard;

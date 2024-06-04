import { Grid } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Grid
      container
      alignContent="center"
      justifyItems="center"
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
        <style>
          {`
            .text {
              font-family: 'Arial', sans-serif;
              font-size: 48px;
              fill: #333;
              text-anchor: middle;
            }
            .number {
              font-size: 120px;
              fill: #ff6347;
            }
          `}
        </style>
        <text x="400" y="200" className="text number">
          404
        </text>
        <text x="400" y="250" className="text">
          Page Not Found
        </text>
      </svg>
    </Grid>
  );
};

export default NotFoundPage;

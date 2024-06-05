import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Box, Typography, Grid } from "@mui/material";
import { Circle } from "@mui/icons-material";
import { IEstadisticas } from "../../types/statistics.interface";

interface IPieGraph {
  fundsRaised: IEstadisticas[];
}
const COLORS = ["#b0d136", "#4363d8", "#ffa500"];

const PieGraph: React.FC<IPieGraph> = ({ fundsRaised }) => {
  const isOdd = fundsRaised.length % 2 !== 0;
  const LegendItem = ({
    color,
    label,
    percentage,
  }: {
    color: string;
    label: string;
    percentage: string;
  }) => (
    <Grid
      xs={5}
      container
      width={"50%"}
      marginRight={2}
      marginBottom={2}
      display={"flex"}
    >
      <Grid item display="flex" direction={"row"} alignItems={"center"}>
        <Circle sx={{ color }} />
        <Typography>{label} </Typography>
        <Typography marginRight={1} color="textSecondary">
          {" "}
        </Typography>
        <Typography marginRight={1} color="textSecondary">
          {percentage}
        </Typography>
      </Grid>
    </Grid>
  );

  const ChartLegend = () => (
    <Grid
      container
      marginBottom={2}
      display="flex"
      justifyContent="space-around"
      flexDirection="row"
      flexWrap="wrap"
    >
      {fundsRaised.map((fund, index) => (
        <LegendItem
          color={COLORS[index % COLORS.length]}
          label={fund.name}
          percentage={fund.value + "%"}
        />
      ))}
      {isOdd && (
        <Grid
          item
          xs={5}
          container
          width={"50%"}
          marginRight={2}
          marginBottom={2}
          display="flex"
        >
          <div />
        </Grid>
      )}
    </Grid>
  );

  return (
    <Box
      sx={{
        width: "100%",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={fundsRaised}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            dataKey={"value"}
          >
            {fundsRaised.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <ChartLegend />
    </Box>
  );
};

export default PieGraph;

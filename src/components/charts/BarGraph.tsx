import { BarChart, BarChartProps } from "@mui/x-charts/BarChart";
import Stack from "@mui/material/Stack";
import { styled } from "styled-components";
import { IEstadisticas } from "../../types/statistics.interface";
import { Typography } from "@mui/material";

const StyledBarChartContainer = styled.div`
  .MuiChartsAxis-tickContainer {
    display: none;
  }
  .MuiChartsAxis-line {
    display: none;
  }
`;

interface IBarGraphProps {
  raisedMoney: IEstadisticas[];
}

const BarGraph: React.FC<IBarGraphProps> = ({ raisedMoney }) => {
  const COLORS = ["#FF5722", "#FF4081", "#FFC107", "#4CAF50"]; // Lista de colores predefinidos

  const formattedData = raisedMoney.map((item, index) => ({
    value: item.value,
    name: item.name,
    color: COLORS[index % COLORS.length], // Asignar colores desde la lista predefinida
  }));

  const chartData = formattedData.map((item) => item.value);

  const chartSettingsH: Partial<BarChartProps> = {
    height: 300,
    yAxis: [{ scaleType: "band", dataKey: "value", data: chartData }],
  };

  return (
    <>
      <Stack direction="column" sx={{ width: "100%", maxWidth: 600 }}>
        <StyledBarChartContainer>
          <BarChart
            series={[
              {
                layout: "horizontal",
                stack: "stack",
                data: chartData,
                backgroundColor: formattedData.map((item) => item.color), // Asignar colores a las barras
              },
            ]}
            {...chartSettingsH}
            borderRadius={30}
          />
          <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
            {formattedData.map((item, index) => (
              <Typography
                key={item.name}
                variant="body2"
                component="span"
                sx={{ display: "flex", alignItems: "center" }}
              >
                {index + 1} {item.name.toUpperCase()}
              </Typography>
            ))}
          </Stack>
        </StyledBarChartContainer>
      </Stack>
    </>
  );
};

export default BarGraph;

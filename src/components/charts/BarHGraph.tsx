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

const BarHGraph: React.FC<IBarGraphProps> = ({ raisedMoney }) => {
  const formattedData = raisedMoney.map((item) => ({
    name: item.name,
    value: item.value,
  }));

  const chartData = formattedData.map((item) => item.value);
  const chartName = formattedData.map((item) => item.name);

  return (
    <Stack direction="column" sx={{ width: "100%", maxWidth: 600 }}>
      <StyledBarChartContainer>
        <BarChart
          series={[
            {
              layout: "vertical",
              stack: "stack",
              data: chartData,
              color: "#e0e0e0e0",
            },
          ]}
          xAxis={[{ scaleType: "band", dataKey: "name", data: chartName }]}
          height={300}
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
  );
};

export default BarHGraph;

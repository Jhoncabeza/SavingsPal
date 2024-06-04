import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

import _LayoutCustomCard from "../../HOC/_LayoutCustomCard/_LayoutCustomCard";

interface InfoCardProps {
  title: string;
  amount: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, amount }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, textAlign: "center", margin: 1 }}>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="h5">{amount}</Typography>
    </Paper>
  );
};

const FinancialInfo: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <InfoCard title="Dinero Disponible en caja" amount="$10.000k" />
      <InfoCard title="Dinero Prestado" amount="$40.000k" />
    </Box>
  );
};

const StaticsView = () => {
  const data01 = [
    { name: "Intereses", value: 65 },
    { name: "Multas", value: 20 },
    { name: "Actividades", value: 15 },
  ];

  const COLORS = ["#b0d136", "#4363d8", "#ffa500"];

  const PieGraph: React.FC = () => {
    return (
      <Box sx={{ width: "100%", height: 300 }}>
        <Typography variant="h6" gutterBottom>
          Porcentaje Recaudado
        </Typography>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data01}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              labelLine={false}
              fill="#8884d8"
              dataKey="value"
            >
              {data01.map((_entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    );
  };

  const data = [
    { name: "Aportes", value: 15000 },
    { name: "Actividades", value: 8000 },
    { name: "Préstamos", value: 9000 },
  ];

  const BarGraph: React.FC = () => {
    return (
      <Box sx={{ width: "100%", height: 300 }}>
        <Typography variant="h6" gutterBottom>
          Tipos de Multas
        </Typography>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#ff7300" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    );
  };

  return (
    <_LayoutCustomCard
      title="Estadísticas"
      children={
        <>
          <BarGraph />
          <PieGraph />
          <FinancialInfo />
        </>
      }
    />
  );
};

export default StaticsView;

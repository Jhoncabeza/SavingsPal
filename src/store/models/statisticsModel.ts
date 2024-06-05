import { IEstadisticas } from "../../types/statistics.interface";

export interface StatisticsModel {
  fundsRaised: IEstadisticas[];
  totalFundsRaised: number;
  interestRate: IEstadisticas[];
  totalInterestRate: number;
}

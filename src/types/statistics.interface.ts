export interface IEstadisticas {
  name: string;
  value: number;
}

export interface IResultado {
  estadisticas: IEstadisticas[];
  total: number;
}

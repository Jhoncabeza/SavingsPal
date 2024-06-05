import axios, { AxiosResponse } from "axios";
import { IResultado } from "../types/statistics.interface";
import { IData } from "../types";

const baseURL = "http://localhost:8090";

const instance = axios.create({
  baseURL: baseURL,
});

export const getFundsRaised = async (): Promise<IResultado> => {
  try {
    const response: AxiosResponse<IData> = await instance.get(
      "/estadisticas/recaudado/"
    );
    return response.data.data.resultado;
  } catch (error) {
    console.error("Error fetching user:", (error as Error).message);
    throw error;
  }
};

export const getInterestRate = async (): Promise<IResultado> => {
  try {
    const response: AxiosResponse<IData> = await instance.get(
      "/estadisticas/intereses/periodos/"
    );
    return response.data.data.resultado;
  } catch (error) {
    console.error("Error fetching user:", (error as Error).message);
    throw error;
  }
};

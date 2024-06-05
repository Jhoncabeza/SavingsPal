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

export const getLoanedMoney = async (): Promise<IData> => {
  try {
    const response: AxiosResponse<IData> = await instance.get(
      "/estadisticas/prestamos/"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", (error as Error).message);
    throw error;
  }
};

export const getRaisedMoney = async (): Promise<IResultado> => {
  try {
    const response: AxiosResponse<IData> = await instance.get(
      "/estadisticas/total_dinero/"
    );
    return response.data.data.resultado;
  } catch (error) {
    console.error("Error fetching user:", (error as Error).message);
    throw error;
  }
};

export const getFineType = async (): Promise<IResultado> => {
  try {
    const response: AxiosResponse<IData> = await instance.get(
      "/estadisticas/multas/nombre/"
    );
    return response.data.data.resultado;
  } catch (error) {
    console.error("Error fetching user:", (error as Error).message);
    throw error;
  }
};

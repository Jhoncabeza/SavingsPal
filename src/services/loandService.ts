import axios, { AxiosResponse } from "axios";
import { ILoand, ILoandFormData } from "../types/loand.interface";

interface IGetAllLoandResponse {
  data: {
    responseList: ILoand[];
  };
  responseList: ILoand[];
}

const baseURL = "http://localhost:8090";

const instance = axios.create({
  baseURL: baseURL,
});

export const getAllLoands = async (): Promise<
  AxiosResponse<IGetAllLoandResponse>
> => {
  try {
    const response: AxiosResponse<IGetAllLoandResponse> = await instance.get(
      "/prestamo/all/"
    );
    return response;
  } catch (error) {
    console.error("Error fetching user:", (error as Error).message);
    throw error;
  }
};

export const getUpdateLoand = async (
  loandUpdate: ILoandFormData
): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await instance.put(
      "/prestamo/update/",
      loandUpdate
    );
    return response;
  } catch (error) {
    console.error("Error fetching user:", (error as Error).message);
    throw error;
  }
};

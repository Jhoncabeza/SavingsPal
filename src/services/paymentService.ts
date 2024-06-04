import axios, { AxiosResponse } from "axios";
import { IPayment } from "../types/payment.interface";

const baseURL = "http://localhost:8090";

const instance = axios.create({
  baseURL: baseURL,
});

export const getCreatePayment = async (
  payment: IPayment
): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await instance.post("/multa/", payment);
    return response;
  } catch (error) {
    console.error("Error fetching user:", (error as Error).message);
    throw error;
  }
};

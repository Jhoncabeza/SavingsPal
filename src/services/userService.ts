import axios, { AxiosResponse } from "axios";
import { IUser, IUserFormData, IUserState } from "../types/user.interface";

interface IGetAllUsersResponse {
  data: {
    responseList: IUser[];
  };
  responseList: IUser[];
}

const baseURL = "http://localhost:8090";

const instance = axios.create({
  baseURL: baseURL,
});

const defaultHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
};

export const getUserById = async (cedula: string): Promise<IUser> => {
  try {
    const response: AxiosResponse<IUser> = await instance.get("/socio/", {
      params: { id: cedula },
      ...defaultHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", (error as Error).message);
    throw error;
  }
};

export const getAllUsers = async (): Promise<
  AxiosResponse<IGetAllUsersResponse>
> => {
  try {
    const response: AxiosResponse<IGetAllUsersResponse> = await instance.get(
      "/socio/all/"
    );
    return response;
  } catch (error) {
    console.error("Error fetching user:", (error as Error).message);
    throw error;
  }
};

export const getCreateUser = async (
  user: IUserFormData
): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await instance.post("/socio/", user);
    return response;
  } catch (error) {
    console.error("Error fetching user:", (error as Error).message);
    throw error;
  }
};

export const getUpdateStateUser = async (
  userState: IUserState
): Promise<AxiosResponse> => {
  try {
    const response: AxiosResponse = await instance.put(
      "/socio/update/",
      userState
    );
    return response;
  } catch (error) {
    console.error("Error fetching user:", (error as Error).message);
    throw error;
  }
};

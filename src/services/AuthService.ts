import axios, { AxiosResponse } from "axios";

export interface LoginRequestData {
  username: string;
  password: string;
}

export interface ApiResponse<T> {
  status: number;
  data?: T;
  error?: string;
}

const AUTH_BASE_URL = "http://localhost:8080/api/auth";

export const login = async (
  data: LoginRequestData
): Promise<ApiResponse<string>> => {
  try {
    const response: AxiosResponse<string> = await axios.post(
      `${AUTH_BASE_URL}/login`,
      data
    );
    return {
      status: response.status,
      data: response.data ?? "",
    };
  } catch (error: any) {
    return {
      status: error.response?.status || 500,
      error: error.response?.data?.message || "Unexpected error ocurred.",
    };
  }
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiResponse } from './apiResponse';

export interface IHttpClient {
  get<T>(endPoint: string, options?: any): Promise<ApiResponse<T>>;

  post<T>(
    endPoint: string,
    payload: any,
    options?: any,
  ): Promise<ApiResponse<T>>;

  put<T>(
    endPoint: string,
    payload: any,
    options?: any,
  ): Promise<ApiResponse<T>>;

  delete(endPoint: string, options?: any): Promise<ApiResponse<boolean>>;
}

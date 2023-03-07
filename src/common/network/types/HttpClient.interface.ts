/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiResponse, SuccessResponse } from './apiResponse';

export interface IHttpClient {
  get<T>(endPoint: string, options?: any): Promise<SuccessResponse<T>>;

  post<T>(
    endPoint: string,
    payload: any,
    options?: any,
  ): Promise<SuccessResponse<T>>;

  put<T>(
    endPoint: string,
    payload: any,
    options?: any,
  ): Promise<SuccessResponse<T>>;

  delete(endPoint: string, options?: any): Promise<SuccessResponse<boolean>>;
}

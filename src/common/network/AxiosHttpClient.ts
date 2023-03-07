/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { injectable } from 'inversify';
import {
  ApiResponse,
  FailResponse,
  SuccessResponse,
} from './types/apiResponse';
import { IHttpClient } from './types/HttpClient.interface';

@injectable()
export default class AxiosHttpClient implements IHttpClient {
  private client: AxiosInstance;

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl,
    });
  }

  get<T>(endPoint: string, options?: any): Promise<SuccessResponse<T>> {
    return this.client
      .get(endPoint, options)
      .then(
        (res: AxiosResponse<T>) =>
          ({
            status: 'success',
            data: res.data,
          } as SuccessResponse<T>),
      )
      .catch((rej: AxiosError) => {
        throw {
          status: 'error',
          message: rej.message,
          name: rej.name,
        } as FailResponse;
      });
  }

  post<T>(
    endPoint: string,
    payload: any,
    options?: any,
  ): Promise<SuccessResponse<T>> {
    return this.client
      .post(endPoint, payload, options)
      .then(
        (res: AxiosResponse) =>
          ({ status: 'success', data: res.data } as SuccessResponse<T>),
      )
      .catch((rej: AxiosError) => {
        throw {
          status: 'error',
          message: rej.message,
          name: rej.name,
        } as FailResponse;
      });
  }

  put<T>(
    endPoint: string,
    payload: any,
    options?: any,
  ): Promise<SuccessResponse<T>> {
    return this.client
      .put(endPoint, payload, options)
      .then(
        (res: AxiosResponse) =>
          ({ status: 'success', data: res.data } as SuccessResponse<T>),
      )
      .catch((rej: AxiosError) => {
        throw {
          status: 'error',
          message: rej.message,
          name: rej.name,
        } as FailResponse;
      });
  }

  delete(endPoint: string, options?: any): Promise<SuccessResponse<boolean>> {
    return this.client
      .delete(endPoint, options)
      .then(
        () => ({ status: 'success', data: true } as SuccessResponse<boolean>),
      )
      .catch((rej: AxiosError) => {
        throw {
          status: 'error',
          message: rej.message,
          name: rej.name,
        } as FailResponse;
      });
  }
}

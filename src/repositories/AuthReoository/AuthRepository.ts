import END_POINT from '@common/constants/endPoint';
import APP_TYPES from '@common/di/types';
import { UserEntity, UserResponse } from '@common/entities/user';
import { SuccessResponse } from '@common/network/types/apiResponse';
import type { IHttpClient } from '@common/network/types/HttpClient.interface';
import { inject, injectable } from 'inversify';
import IAuthRepository from './AuthRepository.interface';

@injectable()
export default class AuthRepository implements IAuthRepository {
  private httpClient: IHttpClient;

  constructor(
    @inject(APP_TYPES.HTTP_CLIENT_TYPES.IHttpClient)
    httpClient: IHttpClient | any,
  ) {
    this.httpClient = httpClient;
  }
  registerUser(
    email: string,
    password: string,
    username: string,
  ): Promise<SuccessResponse<UserEntity>> {
    return this.httpClient
      .post<UserResponse>(END_POINT.REGISTER_USER, {
        user: { email, password, username },
      })
      .then(e => ({ ...e, data: e.data.user } as SuccessResponse<UserEntity>));
  }

  login(email: string, password: string): Promise<SuccessResponse<UserEntity>> {
    return this.httpClient
      .post<UserResponse>(END_POINT.LOGIN, {
        user: { email, password },
      })
      .then(e => ({ ...e, data: e.data.user } as SuccessResponse<UserEntity>));
  }
}

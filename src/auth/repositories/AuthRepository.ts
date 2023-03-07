import { inject, injectable } from 'inversify';
import { UserEntity } from '@common/entities/user';
import { ApiResponse } from '@common/network/types/apiResponse';
import * as HttpClientInterface from '@common/network/types/HttpClient.interface';
import END_POINT from '@common/constants/endPoint';
import { IAuthRepository } from '@auth/types';
import APP_TYPES from '@common/di/types';

@injectable()
export default class AuthRepository implements IAuthRepository {
  private httpClient: HttpClientInterface.IHttpClient;

  constructor(
    @inject(APP_TYPES.HTTP_CLIENT_TYPES.IHttpClient)
    httpClient: HttpClientInterface.IHttpClient,
  ) {
    this.httpClient = httpClient;
  }

  login(email: string, password: string): Promise<ApiResponse<UserEntity>> {
    return this.httpClient.post(END_POINT.LOGIN, { user: { email, password } });
  }
}

import { IAuthRepository } from '@auth/types';
import END_POINT from '@common/constants/endPoint';
import APP_TYPES from '@common/di/types';
import { UserEntity } from '@common/entities/user';
import { SuccessResponse } from '@common/network/types/apiResponse';
import type { IHttpClient } from '@common/network/types/HttpClient.interface';

import { inject, injectable } from 'inversify';

@injectable()
export default class AuthRepository implements IAuthRepository {
  private httpClient: IHttpClient;

  constructor(
    @inject(APP_TYPES.HTTP_CLIENT_TYPES.IHttpClient)
    httpClient: IHttpClient | any,
  ) {
    this.httpClient = httpClient;
  }

  login(email: string, password: string): Promise<SuccessResponse<UserEntity>> {
    return this.httpClient.post(END_POINT.LOGIN, { user: { email, password } });
  }
}

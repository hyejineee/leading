import { UserEntity } from '@common/entities/user';
import { ApiResponse } from '@common/network/types/apiResponse';
import { UseLogin } from '@auth/types/hooks.types';

export interface IAuthRepository {
  login(email: string, password: string): Promise<ApiResponse<UserEntity>>;
}

export interface IAuthContext {
  login: UseLogin;
}

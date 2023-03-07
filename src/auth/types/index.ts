import { UseLogin } from '@auth/types/hooks.types';
import { UserEntity } from '@common/entities/user';
import { SuccessResponse } from '@common/network/types/apiResponse';

export interface IAuthRepository {
  login(email: string, password: string): Promise<SuccessResponse<UserEntity>>;
}

export interface IAuthContext {
  login: UseLogin;
}

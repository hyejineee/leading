import { UserEntity } from '../../common/entities/user';
import { ApiResponse } from '../../common/network/types/apiResponse';
import { UseLogin } from './hooks.types';

export interface IAuthRepository {
  login(email: string, password: string): Promise<ApiResponse<UserEntity>>;
}

export interface IAuthContext {
  login: UseLogin;
}

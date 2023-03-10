import RegisterUserPageState from '@auth/contexts/registerUserContext/pageState';
import { UseLogin, UseRegisterUser } from '@auth/types/hooks.types';
import { UserEntity } from '@common/entities/user';
import { SuccessResponse } from '@common/network/types/apiResponse';
import Action from '@common/types/Action';

export interface IAuthRepository {
  login(email: string, password: string): Promise<SuccessResponse<UserEntity>>;
  registerUser(
    email: string,
    password: string,
    username: string,
  ): Promise<SuccessResponse<UserEntity>>;
}

export interface IAuthContext {
  login: UseLogin;
}

export interface IRegisterUserContext {
  uiState: Action<RegisterUserPageState, null> | null;
  registerUser: UseRegisterUser;
}

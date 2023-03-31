import { UserEntity } from '@common/entities/user';
import { SuccessResponse } from '@common/network/types/apiResponse';

export default interface IAuthRepository {
  login(email: string, password: string): Promise<SuccessResponse<UserEntity>>;
  registerUser(
    email: string,
    password: string,
    username: string,
  ): Promise<SuccessResponse<UserEntity>>;
}

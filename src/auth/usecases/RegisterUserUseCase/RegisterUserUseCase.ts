import type { IAuthRepository } from '@auth/types';
import APP_TYPES from '@common/di/types';
import { inject, injectable } from 'inversify';

@injectable()
export default class RegisterUserUseCase {
  private authRepository: IAuthRepository;

  constructor(
    @inject(APP_TYPES.REPOSITORY_TYPES.IAuthRepository)
    authRepository: IAuthRepository | any,
  ) {
    this.authRepository = authRepository;
  }

  async execute(email: string, password: string, username: string) {
    await this.authRepository.registerUser(email, password, username);
  }
}

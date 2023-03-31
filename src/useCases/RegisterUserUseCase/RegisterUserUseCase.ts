import APP_TYPES from '@common/di/types';
import { inject, injectable } from 'inversify';
import IAuthRepository from 'src/repositories/AuthReoository/AuthRepository.interface';

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

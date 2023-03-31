import { inject, injectable } from 'inversify';
import APP_TYPES from '@common/di/types';
import type { ILocalRepository } from '@common/types/interfaces';
import IAuthRepository from 'src/repositories/AuthReoository/AuthRepository.interface';

@injectable()
export default class LoginUseCase {
  private authRepository: IAuthRepository;
  private localRepository: ILocalRepository;

  constructor(
    @inject(APP_TYPES.REPOSITORY_TYPES.IAuthRepository)
    authRepository: IAuthRepository | any,
    @inject(APP_TYPES.REPOSITORY_TYPES.ILocalRepository)
    localRepository: ILocalRepository | any,
  ) {
    this.authRepository = authRepository;
    this.localRepository = localRepository;
  }

  async execute(email: string, password: string) {
    const response = await this.authRepository.login(email, password);
    this.localRepository.set<string>('token', response.data.token);
  }
}

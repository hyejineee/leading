import { inject, injectable } from 'inversify';
import APP_TYPES from '@common/di/types';
import * as types from '@auth/types';

@injectable()
export default class LoginUseCase {
  private authRepository: types.IAuthRepository;

  constructor(
    @inject(APP_TYPES.REPOSITORY_TYPES.IAuthRepository)
    authRepository: types.IAuthRepository,
  ) {
    this.authRepository = authRepository;
  }

  async execute(email: string, password: string) {
    const response = await this.authRepository.login(email, password);
    // TODO : 토큰만 뺴서 로컬 스토리지에 저장하기
  }
}

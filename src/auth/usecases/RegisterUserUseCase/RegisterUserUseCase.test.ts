import 'reflect-metadata';
import { IAuthRepository } from '@auth/types';
import { UserEntity } from '@common/entities/user';
import { anything, instance, mock, when, verify } from 'ts-mockito';
import RegisterUserUseCase from './RegisterUserUseCase';

describe('RegisterUserUseCase', () => {
  const mockAuthRepository = mock<IAuthRepository>();
  const fakeUserEntity: UserEntity = {
    email: 'test@test.com',
    token: 'fakeToken',
    username: 'fake',
    bio: 'hello fake',
    image: 'fakeUrl',
  };

  it('회원가입을 요청한다.', async () => {
    when(
      mockAuthRepository.registerUser(anything(), anything(), anything()),
    ).thenResolve({
      status: 'success',
      data: fakeUserEntity,
    });

    const authRepository = instance(mockAuthRepository);

    const registerUserUseCase = new RegisterUserUseCase(authRepository);
    await registerUserUseCase.execute('email', 'password', 'username');

    verify(
      mockAuthRepository.registerUser(anything(), anything(), anything()),
    ).once();
  });
});

import 'reflect-metadata';


import { anything, instance, mock, reset, when } from 'ts-mockito';
import { UserEntity } from '@common/entities/user';
import IAuthRepository from 'src/repositories/AuthReoository/AuthRepository.interface';
import ILocalRepository from 'src/repositories/LocalRepository/LocalRepository.interface';
import LoginUseCase from './LoginUseCase';

describe('LoginUseCase', () => {
  const mockAuthRepository = mock<IAuthRepository>();
  const mockLocalRepository = mock<ILocalRepository>();

  const fakeUserEntity: UserEntity = {
    email: 'test@test.com',
    token: 'fakeToken',
    username: 'fake',
    bio: 'hello fake',
    image: 'fakeUrl',
  };

  beforeEach(() => {
    reset(mockAuthRepository);
    reset(mockLocalRepository);
  });

  it('로그인 응답으로 받은 토큰을 로컬에 저장한다.', async () => {
    when(mockAuthRepository.login(anything(), anything())).thenResolve({
      status: 'success',
      data: fakeUserEntity,
    });

    when(mockLocalRepository.get<string>(anything())).thenReturn('test_token');

    const localRepository = instance(mockLocalRepository);

    const loginUseCase = new LoginUseCase(
      instance(mockAuthRepository),
      localRepository,
    );

    await loginUseCase.execute('email', 'password');

    expect(localRepository.get<string>('token')).toBe('test_token');
  });
});

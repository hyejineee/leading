import { IAuthRepository } from '@auth/types';
import { UserEntity } from '@common/entities/user';
import {
  FailResponse,
  SuccessResponse,
} from '@common/network/types/apiResponse';
import { IHttpClient } from '@common/network/types/HttpClient.interface';
import 'reflect-metadata';
import { anything, instance, mock, reset, when } from 'ts-mockito';
import AuthRepository from './AuthRepository';

describe('AuthRepository', () => {
  const mockHttpClient = mock<IHttpClient>();
  let authRepository: IAuthRepository;

  const fakeUserEntity: UserEntity = {
    email: 'test@test.com',
    token: 'fakeToken',
    username: 'fake',
    bio: 'hello fake',
    image: 'fakeUrl',
  };

  beforeEach(() => {
    reset(mockHttpClient);
    authRepository = new AuthRepository(instance(mockHttpClient));
  });

  describe('login 메서드', () => {
    context('login api의 응답이 성공일 때', () => {
      it('UserEntity 응답을 받는다.', async () => {
        when(mockHttpClient.post(anything(), anything())).thenResolve({
          status: 'success',
          data: fakeUserEntity,
        } as SuccessResponse<UserEntity>);

        const actual = await authRepository.login('email', 'password');

        expect(actual.status).toBe('success');
        if (actual.status === 'success') {
          expect(actual.data.email).toBe(fakeUserEntity.email);
        }
      });
    });

    context('login api의 응답이 실패일 때', () => {
      it('FailResponse 응답을 받는다.', async () => {
        const errorMessage = '로그인에 실패했습니다.';

        when(mockHttpClient.post(anything(), anything())).thenThrow({
          status: 'error',
          name: 'error_name',
          message: errorMessage,
        } as FailResponse);

        try {
          await authRepository.login('email', 'password');
        } catch (e) {
          const actual = e as FailResponse;
          expect(actual.status).toBe('error');
          if (actual.status === 'error') {
            expect(actual.message).toBe(errorMessage);
          }
        }
      });
    });
  });
});

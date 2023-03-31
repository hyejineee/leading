// 회원가입 페이지에서 사용되는 상태를 관리하는 context

import RegisterUserUseCase from '@auth/usecases/RegisterUserUseCase/RegisterUserUseCase';
import { act, render, renderHook } from '@testing-library/react';
import { ReactNode } from 'react';
import { anything, instance, mock, when } from 'ts-mockito';
import RegisterUserPageState from './pageState';
import {
  RegisterUserProvider,
  useRegisterUser,
  useRegisterUserPageState,
} from './RegisterUserContext';

describe('RegisterUserContext', () => {
  const mockRegisterUserUseCase = mock<RegisterUserUseCase>();

  const customRender = (registerUserUseCase: RegisterUserUseCase) => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <RegisterUserProvider registerUserUseCase={registerUserUseCase}>
        {children}
      </RegisterUserProvider>
    );

    return renderHook(
      () => ({
        registerUser: useRegisterUser(),
        registerPageState: useRegisterUserPageState(),
      }),
      { wrapper },
    );
  };

  it('회원가입에 성공하면, 회원가입 성공 state를 발행한다.', async () => {
    when(
      mockRegisterUserUseCase.execute(anything(), anything(), anything()),
    ).thenResolve();

    const { result } = customRender(instance(mockRegisterUserUseCase));

    await act(async () => {
      await result.current.registerUser('email', 'password', 'username');
    });

    expect(result.current.registerPageState?.name).toBe(
      RegisterUserPageState.SUCCESS_REGISTER_USER,
    );
  });

  it('회원가입에 실패하면, 회원가입 실패 state를 발행한다.', async () => {
    const errorMessage = '회원가입에 실패했습니다.';

    when(
      mockRegisterUserUseCase.execute(anything(), anything(), anything()),
    ).thenThrow(Error(errorMessage));

    const { result } = customRender(instance(mockRegisterUserUseCase));

    await act(async () => {
      await result.current.registerUser('email', 'password', 'username');
    });

    expect(result.current.registerPageState?.name).toBe(
      RegisterUserPageState.FAIL_REGISTER_USER,
    );
    expect(result.current.registerPageState?.message).toBe(errorMessage);
  });
});

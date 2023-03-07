import LoginUseCase from '@auth/usecases/LoginUseCase';
import { act, render, renderHook } from '@testing-library/react';
import { ReactNode } from 'react';
import { anything, instance, mock, when } from 'ts-mockito';
import {
  LoginPageState,
  LoginProvider,
  useLogin,
  useLoginPageState,
} from './loginContext';

// 로그인 페이지에서 사용되는 상태를 관리하는 context
describe('LoginContext', () => {
  const mockLoginUseCase = mock<LoginUseCase>();

  const customRender = (loginUseCase: LoginUseCase) => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <LoginProvider loginUseCase={loginUseCase}>{children}</LoginProvider>
    );

    return renderHook(
      () => ({
        login: useLogin(),
        loginPageState: useLoginPageState(),
      }),
      { wrapper },
    );
  };

  it('로그인에 성공하면, 페이지 이동 state를 발행한다.', async () => {
    when(mockLoginUseCase.execute(anything(), anything())).thenResolve();

    const { result } = customRender(instance(mockLoginUseCase));

    await act(async () => {
      await result.current.login('email', 'password');
    });

    expect(result.current.loginPageState?.name).toBe(
      LoginPageState.GO_TO_MAIN_PAGE,
    );
  });

  it('로그인에 실패하면, 에러 메시지 출력 state를 발행한다.', async () => {
    const errorMessage = '로그인에 실패했습니다.';

    when(mockLoginUseCase.execute(anything(), anything())).thenThrow(
      Error(errorMessage),
    );

    const { result } = customRender(instance(mockLoginUseCase));

    await act(async () => {
      await result.current.login('email', 'password');
    });

    expect(result.current.loginPageState?.name).toBe(LoginPageState.SHOW_ERROR);
    expect(result.current.loginPageState?.message).toBe(errorMessage);
  });

  // 로그인에 실패하면 에러 메시지 띄우기 액션을 발행한다.
});

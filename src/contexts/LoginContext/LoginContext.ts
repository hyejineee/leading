import constate from 'constate';
import { UseLogin } from '@auth/types/hooks.types';
import LoginUseCase from '@auth/usecases/LoginUseCase/LoginUseCase';
import { useState } from 'react';
import Action from '@common/types/Action';

export enum LoginPageState {
  SUCCESS_LOGIN = 'SUCCESS_LOGIN',
  FAIL_LOGIN = 'FAIL_LOGIN',
}

type UseAuthContextProps = {
  loginUseCase: LoginUseCase;
};

const useLoginContext = ({ loginUseCase }: UseAuthContextProps) => {
  const [uiState, setUiState] = useState<Action<LoginPageState, null>>();

  const login: UseLogin = async (email: string, password: string) => {
    try {
      await loginUseCase.execute(email, password);

      setUiState(
        new Action<LoginPageState, null>(LoginPageState.SUCCESS_LOGIN),
      );
    } catch (e) {
      setUiState(
        new Action<LoginPageState, null>(LoginPageState.FAIL_LOGIN, {
          message: (e as Error).message,
        }),
      );
    }
  };

  return {
    uiState,
    login,
  };
};

export const [LoginProvider, useLoginPageState, useLogin] = constate(
  useLoginContext,
  value => value.uiState,
  value => value.login,
);

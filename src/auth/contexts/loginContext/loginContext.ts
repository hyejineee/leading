import constate from 'constate';
import { UseLogin } from '@auth/types/hooks.types';
import LoginUseCase from '@auth/usecases/LoginUseCase/LoginUseCase';
import { useState } from 'react';
import Action from '@common/types/Action';

export enum LoginPageState {
  GO_TO_MAIN_PAGE = 'GO_TO_MAIN_PAGE',
  SHOW_ERROR = 'SHOW_ERROR',
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
        new Action<LoginPageState, null>(LoginPageState.GO_TO_MAIN_PAGE),
      );
    } catch (e) {
      setUiState(
        new Action<LoginPageState, null>(LoginPageState.SHOW_ERROR, {
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

import Action from '@common/types/Action';
import constate from 'constate';
import { ReactNode, useState } from 'react';
import RegisterUserUseCase from 'src/useCases/RegisterUserUseCase/RegisterUserUseCase';
import RegisterUserPageState from './pageState';

type Props = {
  children: ReactNode;
  registerUserUseCase: RegisterUserUseCase;
};

const useRegisterUserContext = ({ registerUserUseCase }: Props) => {
  const [uiState, setUiState] = useState<Action<
    RegisterUserPageState,
    null
  > | null>(null);

  const registerUser = async (
    email: string,
    password: string,
    username: string,
  ) => {
    try {
      await registerUserUseCase.execute(email, password, username);

      setUiState(
        new Action<RegisterUserPageState, null>(
          RegisterUserPageState.SUCCESS_REGISTER_USER,
        ),
      );
    } catch (e) {
      setUiState(
        new Action<RegisterUserPageState, null>(
          RegisterUserPageState.FAIL_REGISTER_USER,
          {
            message: (e as Error).message,
          },
        ),
      );
    }
  };

  return {
    uiState,
    registerUser,
  };
};

export const [RegisterUserProvider, useRegisterUserPageState, useRegisterUser] =
  constate(
    useRegisterUserContext,
    value => value.uiState,
    value => value.registerUser,
  );

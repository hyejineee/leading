import { IRegisterUserContext } from '@auth/types';
import { UseRegisterUser } from '@auth/types/hooks.types';
import RegisterUserUseCase from '@auth/usecases/RegisterUserUseCase/RegisterUserUseCase';
import Action from '@common/types/Action';
import constate from 'constate';
import { ReactNode, useState } from 'react';
import RegisterUserPageState from './pageState';

type Props = {
  children: ReactNode;
  registerUserUseCase: RegisterUserUseCase;
};

type Context = (props: Props) => IRegisterUserContext;

const useRegisterUserContext: Context = ({ registerUserUseCase }: Props) => {
  const [uiState, setUiState] = useState<Action<
    RegisterUserPageState,
    null
  > | null>(null);

  const registerUser: UseRegisterUser = async (
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

import constate from 'constate';
import { useRouter } from 'next/router';
import { useSetAlert } from '../../common/components/AlertMessage';
import { UseLogin } from '../types/hooks.types';
import LoginUseCase from '../usecases/LoginUseCase';

type UseAuthContextProps = {
  loginUseCase: LoginUseCase;
};

const useLoginContext = ({ loginUseCase }: UseAuthContextProps) => {
  const router = useRouter();
  const setAlert = useSetAlert();

  const login: UseLogin = async (email: string, password: string) => {
    try {
      await loginUseCase.execute(email, password);
      router.replace('/');
    } catch (e) {
      setAlert({
        visible: true,
        status: 'error',
        message: (e as Error).message,
      });
    }
  };

  return {
    login,
  };
};

export const [LoginProvider, useLogin] = constate(
  useLoginContext,
  value => value.login,
);

import {
  LoginPageState,
  useLoginPageState,
} from '@auth/contexts/loginContext/loginContext';
import { useSetAlert } from 'src/components/commons/AlertMessage';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';

type Props = {
  children: ReactNode;
};

export default function LoginContainer({ children }: Props) {
  const router = useRouter();
  const showAlert = useSetAlert();
  const uiState = useLoginPageState();

  useEffect(() => {
    if (!uiState) return;

    if (uiState?.name === LoginPageState.SUCCESS_LOGIN) {
      router.replace('/');
      return;
    }

    if (uiState?.name === LoginPageState.FAIL_LOGIN) {
      if (!uiState.message) return;

      showAlert({
        visible: true,
        status: 'error',
        message: uiState.message,
      });
    }
  }, [uiState]);

  return <div>{children}</div>;
}

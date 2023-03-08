import { useLoginPageState } from '@auth/contexts/loginContext/loginContext';
import { useSetAlert } from '@common/components/AlertMessage';
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

    if (uiState?.name === 'GO_TO_MAIN_PAGE') {
      router.replace('/');
      return;
    }

    if (uiState?.name === 'SHOW_ERROR') {
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

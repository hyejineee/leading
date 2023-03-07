/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
import { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import LoginForm from '@auth/components/LoginForm';
import {
  LoginProvider,
  useLoginPageState,
} from '@auth/contexts/loginContext/loginContext';
import LoginUseCase from '@auth/usecases/LoginUseCase/LoginUseCase';
import appContainer from '@common/di/container';
import APP_TYPES from '@common/di/types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSetAlert } from '@common/components/AlertMessage';

function LoginPage() {
  const router = useRouter();
  const showAlert = useSetAlert();
  const operate = useLoginPageState();

  useEffect(() => {
    if (operate?.name === 'GO_TO_MAIN_PAGE') {
      router.replace('/');
    }

    if (operate?.name === 'SHOW_ERROR') {
      if (operate.message === undefined) return;

      showAlert({
        visible: true,
        status: 'error',
        message: operate.message,
      });
    }
  }, [operate, router, showAlert]);
  return (
    <>
      로그인 페이지
      <LoginForm />
    </>
  );
}

const withLoginProvider =
  (Component: NextComponentType<NextPageContext, any, any>) =>
  (pageProps: AppProps) => {
    const loginUseCase = appContainer.get<LoginUseCase>(
      APP_TYPES.USE_CASE_TYPES.LoginUseCase,
    );

    return (
      <LoginProvider loginUseCase={loginUseCase}>
        <Component {...pageProps} />
      </LoginProvider>
    );
  };

export default withLoginProvider(LoginPage);

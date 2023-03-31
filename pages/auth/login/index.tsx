import LoginContainer from 'src/components/views/Auth/LoginContainer/LoginContainer';
import LoginForm from 'src/components/views/Auth/LoginForm';
import { LoginProvider } from '@auth/contexts/loginContext/loginContext';
import LoginUseCase from '@auth/usecases/LoginUseCase/LoginUseCase';
import appContainer from '@common/di/container';
import APP_TYPES from '@common/di/types';

export default function LoginPage() {
  const loginUseCase = appContainer.get<LoginUseCase>(
    APP_TYPES.USE_CASE_TYPES.LoginUseCase,
  );

  return (
    <LoginProvider loginUseCase={loginUseCase}>
      <LoginContainer>
        로그인 페이지
        <LoginForm />
      </LoginContainer>
    </LoginProvider>
  );
}

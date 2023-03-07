import LoginForm from '../../../src/auth/components/LoginForm';
import { LoginProvider } from '../../../src/auth/contexts/loginContext/loginContext';
import LoginUseCase from '../../../src/auth/usecases/LoginUseCase';
import appContainer from '../../../src/common/di/container';
import APP_TYPES from '../../../src/common/di/types';

export default function LoginPage() {
  const loginUseCase = appContainer.get<LoginUseCase>(
    APP_TYPES.USE_CASE_TYPES.LoginUseCase,
  );

  return (
    <LoginProvider loginUseCase={loginUseCase}>
      로그인 페이지
      <LoginForm />
    </LoginProvider>
  );
}

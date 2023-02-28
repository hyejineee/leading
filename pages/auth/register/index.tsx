import RegisterUserContainer from '@auth/components/container/RegisterUserContainer/RegisterUserContainer';
import { RegisterUserProvider } from '@auth/contexts/registerUserContext/registerUserContext';
import RegisterUserUseCase from '@auth/usecases/RegisterUserUseCase/RegisterUserUseCase';
import appContainer from '@common/di/container';
import APP_TYPES from '@common/di/types';

export default function RegisterUserPage() {
  const registerUserUseCase = appContainer.get<RegisterUserUseCase>(
    APP_TYPES.USE_CASE_TYPES.RegisterUserUseCase,
  );

  return (
    <RegisterUserProvider registerUserUseCase={registerUserUseCase}>
      <RegisterUserContainer />
    </RegisterUserProvider>
  );
}

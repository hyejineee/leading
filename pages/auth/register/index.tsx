import RegisterUserUseCase from '@auth/usecases/RegisterUserUseCase/RegisterUserUseCase';
import appContainer from '@common/di/container';
import APP_TYPES from '@common/di/types';
import RegisterUserContainer from 'src/components/views/Auth/RegisterUserContainer/RegisterUserContainer';
import { RegisterUserProvider } from 'src/contexts/RegisterUserContext/RegisterUserContext';

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

import RegisterUserForm from '@auth/components/RegisterUserForm';
import RegisterUserPageState from '@auth/contexts/registerUserContext/pageState';
import { useRegisterUserPageState } from '@auth/contexts/registerUserContext/registerUserContext';
import { useSetAlert } from 'src/components/commons/AlertMessage';
import ROUTER from '@common/constants/router';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function RegisterUserContainer() {
  const router = useRouter();
  const showAlert = useSetAlert();
  const uiState = useRegisterUserPageState();

  useEffect(() => {
    if (uiState === null) return;

    switch (uiState.name) {
      case RegisterUserPageState.SUCCESS_REGISTER_USER: {
        router.replace(ROUTER.LOGIN_PAGE);
        break;
      }

      case RegisterUserPageState.FAIL_REGISTER_USER: {
        showAlert({
          visible: true,
          status: 'error',
          message: uiState.message || '',
        });
        break;
      }

      default: {
        break;
      }
    }
  }, [uiState]);

  return (
    <div>
      회원가입 <RegisterUserForm />
    </div>
  );
}

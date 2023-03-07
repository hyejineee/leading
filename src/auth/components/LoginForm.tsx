import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../common/components/Inputs/Input';
import { LOGIN_SCHEME } from '../../common/constants/yupScheme';
import { useLogin } from '../contexts/loginContext';

export default function LoginForm() {
  const login = useLogin();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(LOGIN_SCHEME),
    mode: 'onChange',
  });

  const handleLogin = handleSubmit(async (inputs: FieldValues) => {
    await login(inputs.email, inputs.password);
  });

  return (
    <form onSubmit={handleLogin}>
      <Input
        name='email'
        control={control}
        placeholder='이메일을 입력해주세요.'
      />

      <Input
        name='password'
        control={control}
        placeholder='비밀번호를 입력해주세요.'
      />

      <button type='submit'>로그인</button>
    </form>
  );
}

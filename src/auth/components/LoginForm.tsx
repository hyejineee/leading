import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import Input from '../../common/components/Inputs/Input';
import { LOGIN_SCHEME } from '../../constants/yupScheme';
import wrapPromise from '../../common/utils/wrapPromise';
import { useLogin } from '../contexts/authContext';

export default function LoginForm() {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(LOGIN_SCHEME),
    mode: 'onChange',
  });

  const test = wrapPromise(useLogin()('', '')).read();

  return (
    <form>
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

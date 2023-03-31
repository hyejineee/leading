import { useLogin } from 'src/contexts/LoginContext/LoginContext';

import Input from 'src/components/commons/Input';
import { LOGIN_SCHEME } from '@common/constants/yupScheme';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import Form from 'src/components/commons/From';

export default function LoginForm() {
  const login = useLogin();

  const handleLogin = async (inputs: FieldValues) => {
    await login(inputs.email, inputs.password);
  };

  const renderInput = (form: UseFormReturn) => (
    <>
      <Input
        name='email'
        control={form.control}
        placeholder='이메일을 입력해주세요.'
      />
      <Input
        name='password'
        control={form.control}
        placeholder='비밀번호를 입력해주세요.'
      />
      <button type='submit'>로그인</button>
    </>
  );

  return (
    <Form schema={LOGIN_SCHEME} onSubmit={handleLogin} render={renderInput} />
  );
}

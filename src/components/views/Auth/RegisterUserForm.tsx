import Input from 'src/components/commons/Input';
import { REGISTER_USER_SCHEMA } from '@common/constants/yupScheme';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import Form from '@components/commons/From';
import { useRegisterUser } from '@contexts/RegisterUserContext/RegisterUserContext';

export default function RegisterUserForm() {
  const registerUser = useRegisterUser();

  const handleRegisterUser = async (inputs: FieldValues) => {
    await registerUser(inputs.email, inputs.password, inputs.userName);
  };

  const renderInputs = (form: UseFormReturn) => (
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
      <Input
        name='userName'
        control={form.control}
        placeholder='이름을 입력해주세요.'
      />
      <button type='submit'>회원가입</button>
    </>
  );

  return (
    <Form
      schema={REGISTER_USER_SCHEMA}
      onSubmit={handleRegisterUser}
      render={renderInputs}
    />
  );
}

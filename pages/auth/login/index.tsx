import { Suspense } from 'react';
import LoginForm from '../../../src/auth/components/LoginForm';
import SuspenseWrapper from '../../../src/common/components/SuspenseWrapper';

export default function LoginPage() {
  return (
    <div>
      로그인 페이지
      <SuspenseWrapper fallback={<div>로딩중...</div>}>
        <LoginForm />
      </SuspenseWrapper>
    </div>
  );
}

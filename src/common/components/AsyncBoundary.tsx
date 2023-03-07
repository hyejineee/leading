import { ComponentProps, ReactNode } from 'react';
import ErrorBoundary from './ErrorBoundary';
import SuspenseWrapper from './SuspenseWrapper';

type Props = {
  loadingFallback: ComponentProps<typeof SuspenseWrapper>['fallback'];
  children: ReactNode;
};

export default function AsyncBoundary({ loadingFallback, children }: Props) {
  return (
    <ErrorBoundary>
      <SuspenseWrapper fallback={loadingFallback}>{children}</SuspenseWrapper>
    </ErrorBoundary>
  );
}

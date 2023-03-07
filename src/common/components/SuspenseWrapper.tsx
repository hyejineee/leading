/* eslint-disable react/jsx-props-no-spreading */
import { ComponentProps, Suspense } from 'react';
import useMounted from '../hooks/useMounted';

export default function SuspenseWrapper(
  props: ComponentProps<typeof Suspense>,
) {
  const isMounted = useMounted();

  if (isMounted) {
    return <Suspense {...props} />;
  }

  return <div>fallback...</div>;
}

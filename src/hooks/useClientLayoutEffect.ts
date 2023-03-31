import { useEffect, useLayoutEffect } from 'react';

const useClientLayoutEffect = () =>
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useClientLayoutEffect;

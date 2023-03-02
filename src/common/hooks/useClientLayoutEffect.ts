import { useLayoutEffect } from 'react';

const useClientLayoutEffect = () => typeof window !== undefined ? useLayoutEffect : ()=>{};

export default useClientLayoutEffect;
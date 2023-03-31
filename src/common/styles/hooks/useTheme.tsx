import { useCallback, useState } from 'react';
import useClientLayoutEffect from '../../../hooks/useClientLayoutEffect';
import { ModeType, UseTheme } from '../types/useTheme.types';

const useTheme : ()=>UseTheme = ()=>{
  const [theme, setTheme ] = useState<ModeType>('light');
  const useLayoutEffect = useClientLayoutEffect();

  useLayoutEffect(()=>{
    (() => {
      const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
      setTheme(matches ? 'dark' : 'light');
    })();
  }, []);

  const handleToggleTheme = useCallback(()=>{
    setTheme( theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  
  return [theme, handleToggleTheme];
};

export default useTheme;
/* eslint-disable react/jsx-props-no-spreading */

import 'reflect-metadata';
import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import GlobalStyles from '../src/common/styles/globalStyles';
import useTheme from '../src/common/styles/hooks/useTheme';
import mode from '../src/common/styles/theme';
import AlertMessage, {
  AlertProvider,
} from '../src/components/commons/AlertMessage';

export default function App({ Component, pageProps }: AppProps) {
  const [theme] = useTheme();

  return (
    <ThemeProvider theme={mode[theme]}>
      <AlertProvider>
        <AlertMessage>
          <Global styles={GlobalStyles} />
          <Component {...pageProps} />
        </AlertMessage>
      </AlertProvider>
    </ThemeProvider>
  );
}

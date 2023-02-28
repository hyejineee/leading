/* eslint-disable react/jsx-props-no-spreading */
import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import GlobalStyles from '../src/styles/globalStyles';
import mode from '../src/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={mode.dark}>
      <Global styles={GlobalStyles}/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

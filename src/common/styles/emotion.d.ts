/* eslint-disable @typescript-eslint/no-empty-interface */
import { ThemeType } from './theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
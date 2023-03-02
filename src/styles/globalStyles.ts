import { css } from '@emotion/react';
import { ThemeType } from './theme';

const GlobalStyles = (theme : ThemeType) => css`
  html {
    background-color: ${theme.background};
    color: ${theme.secondary_text};
    font-size: 12px !important;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  button{
    cursor: pointer;
  }

  * {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
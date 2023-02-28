/* eslint-disable no-nested-ternary */

import { css } from '@emotion/react';
import { DISPLAY } from './responsive';

export type FontWeight = '900' | '700' | '400';
export type FontSizeKey = 'SUPPER' | 'LARGE' | 'MIDDLE' | 'SMALL' | 'MICRO' | 'NANO' | 'PICO';

const getFontSize = (display: DISPLAY = 'lg') => ({
  SUPPER: display === 'sm' ? 28 : display === 'md' ? 30 : 32,
  LARGE: display === 'sm' ? 24 : display === 'md' ? 26 : 28,
  MIDDLE: display === 'sm' ? 20 : display === 'md' ? 22 : 24,
  SMALL: display === 'sm' ? 16 : 20,
  MICRO: display === 'sm' ? 14 : 16,
  NANO: display === 'sm' ? 12 : 14,
  PICO: display === 'sm' ? 10 : 12,
});

const getFontCSS = (display : DISPLAY, weight : FontWeight, key : FontSizeKey) =>css`
    font-size: ${getFontSize(display)[key]}px;
    font-weight: ${weight};
    `;

const getFontStyle = (display: DISPLAY = 'lg') => ({
  '900': {
    SUPPER: getFontCSS(display, '900', 'SUPPER'),
    LARGE: getFontCSS(display, '900', 'LARGE'),
    MIDDLE: getFontCSS(display, '900', 'MIDDLE'),
    SMALL: getFontCSS(display, '900', 'SMALL'),
    MICRO: getFontCSS(display, '900', 'MICRO'),
    NANO: getFontCSS(display, '900', 'NANO'),
    PICO: getFontCSS(display, '900', 'PICO'),
  },

  '700': {
    SUPPER: getFontCSS(display, '700', 'SUPPER'),
    LARGE: getFontCSS(display, '700', 'LARGE'),
    MIDDLE: getFontCSS(display, '700', 'MIDDLE'),
    SMALL: getFontCSS(display, '700', 'SMALL'),
    MICRO: getFontCSS(display, '700', 'MICRO'),
    NANO: getFontCSS(display, '700', 'NANO'),
    PICO: getFontCSS(display, '700', 'PICO'),
  },

  '400': {
    SUPPER: getFontCSS(display, '400', 'SUPPER'),
    LARGE: getFontCSS(display, '400', 'LARGE'),
    MIDDLE: getFontCSS(display, '400', 'MIDDLE'),
    SMALL: getFontCSS(display, '400', 'SMALL'),
    MICRO: getFontCSS(display, '400', 'MICRO'),
    NANO: getFontCSS(display, '400', 'NANO'),
    PICO: getFontCSS(display, '400', 'PICO'),
  },
});

export default getFontStyle;


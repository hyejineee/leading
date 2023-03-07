import { css, Theme } from '@emotion/react';
import getFontStyle from './typo';

export const alignCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const ErrorTextStyle = (theme : Theme)=>  css`
    color : ${theme.error};
    margin : 8px;
    ${getFontStyle()[700].PICO};
`;

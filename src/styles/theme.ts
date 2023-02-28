import { gray, green, red } from './color';

export type ThemeType = {
  background  : string
  elevated1 : string
  elevated2 : string
  primary_text : string
  secondary_text : string
  tertiary_text : string
  divider : string
  disabled : string
  error : string
  primary_color : string
  secondary_color : string
};

const light : ThemeType = {
  background  : gray[100],
  elevated1 : gray[50],
  elevated2 : gray[100],
  primary_text : gray[900],
  secondary_text : gray[600],
  tertiary_text : gray[200],
  divider : gray[900],
  disabled : gray[300],
  error : red[500],
  primary_color : green[700],
  secondary_color : green[500],
};

const dark: ThemeType = {
  background: gray[900],
  elevated1: gray[500],
  elevated2: gray[600],
  primary_text: gray[50],
  secondary_text: gray[200],
  tertiary_text: gray[800],
  divider: gray[500],
  disabled: gray[300],
  error: red[700],
  primary_color: green[500],
  secondary_color: green[700],
};

const mode = {
  light,
  dark,
};

export default mode;

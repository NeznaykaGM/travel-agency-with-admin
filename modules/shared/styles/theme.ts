import { DefaultTheme, css } from 'styled-components';

export const colors = {
  // blue
  blue400: '#0070f3',
  blue600: '#3011BC',
  // purple
  purple600: '#5856d6',
  // green
  green300: '#2ab736',
  green200: '#87cc43',
  // orange
  orange400: '#fe7a15',
  // red
  red500: '#ff453a',
  // gray
  gray200: '#869DB2',
  gray350: '#4C5A66',
  gray400: '#39434D',
  // other
  white: '#fff'
};

export const templates = {
  absolute: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  centerContent: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  centerItems: css`
    display: flex;
    align-items: center;
  `,
  ellipsis: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `
};

export const dimensions = {
  pageMaxWidth: 1071
};

export const theme: DefaultTheme = {
  colors,
  templates,
  dimensions
};

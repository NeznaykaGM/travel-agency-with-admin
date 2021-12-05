import { css } from 'styled-components';

export const buttonPresets = {
  default: css`
    background-color: ${({ theme }) => theme.colors.orange400};
  `,
  primary: css`
    color: ${({ theme }) => theme.colors.blue600};
    border: 1px solid ${({ theme }) => theme.colors.blue600};

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  `
};

export type ButtonPresets = keyof typeof buttonPresets;

import styled from 'styled-components';
import { ButtonPresets, buttonPresets } from '@md-ui/button/main/presets';

export const WButton = styled.div<{ preset?: ButtonPresets }>`
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  padding: 8px 24px;
  transition: all ease 0.2s;

  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ theme }) => theme.colors.blue600};
  }

  ${({ preset }) => preset && buttonPresets[preset]};
`;

export const BWrapper = styled.div`
  user-select: none;

  ${({ theme }) => theme.templates.centerContent};
`;

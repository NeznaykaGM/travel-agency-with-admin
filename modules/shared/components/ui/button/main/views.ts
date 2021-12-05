import styled from 'styled-components';

export const WButton = styled.div`
  text-transform: uppercase;
  transition: all ease 0.2s;
  text-align: center;
  cursor: pointer;
  border-radius: 20px;

  background: ${({ theme }) => theme.colors.blue600};

  &:active {
    top: 0.1em;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.green300};
  }
`;

export const BWrapper = styled.div`
  user-select: none;
`;

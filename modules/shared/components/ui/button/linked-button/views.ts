import styled from 'styled-components';

export const Button = styled.div`
  cursor: pointer;
  border-radius: 20px;
  transition: all ease 0.2s;
  text-transform: uppercase;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.blue600};

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

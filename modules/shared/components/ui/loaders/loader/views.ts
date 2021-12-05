import styled from 'styled-components';

export const Circle = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  animation: spin 2s linear infinite;

  border-top: 10px solid ${({ theme }) => theme.colors.blue600};
  border: 10px solid ${({ theme }) => theme.colors.white};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

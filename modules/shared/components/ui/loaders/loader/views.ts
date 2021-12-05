import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 50%;
  width: 96px;
  height: 96px;
  animation: spin 2s linear infinite;

  border: 10px solid ${({ theme }) => theme.colors.gray100};
  border-top: 10px solid ${({ theme }) => theme.colors.blue600};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Circle = styled.div``;

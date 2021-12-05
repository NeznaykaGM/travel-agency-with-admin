import styled from 'styled-components';

export const WHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  max-height: 50px;

  background: ${({ theme }) => theme.colors.blue600};
`;

export const LWrapper = styled.div`
  img {
    display: block;
    overflow: hidden;
    max-height: 50px;
  }
`;

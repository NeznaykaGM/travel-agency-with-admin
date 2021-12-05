import * as React from 'react';
// libs
import styled from 'styled-components';
// view components
import { Loader } from '../loader';

interface Props {
  isLoading: boolean;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.templates.absolute}
`;

const ContentLoader: React.FC<Props> = ({ children, isLoading }) =>
  isLoading ? (
    <Wrapper>
      <Loader />
    </Wrapper>
  ) : (
    <>{children}</>
  );

export { ContentLoader };

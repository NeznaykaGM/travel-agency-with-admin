import * as React from 'react';
// view components
import { Loader } from '../loader';
import styled from 'styled-components';

interface Props {
  isEmpty?: boolean;
  isLoading: boolean;
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyBlockWrapper = styled.div`
  ${({ theme }) => theme.templates.centerContent};
  flex-direction: column;
  flex: 1;
`;

export const Image = styled.img`
  width: 436px;
  height: 368px;

  @media (max-width: 768px) {
    max-width: 272px;
    max-height: 230px;
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.gray400};
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 40px;
`;

const ContentLoader: React.FC<Props> = ({ children, isLoading, isEmpty }) => {
  if (isLoading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  if (isEmpty) {
    return (
      <EmptyBlockWrapper>
        <Image src='/static/images/empty.png' alt='empty' />
        <Title>Sorry, we couldn't find anything!</Title>
      </EmptyBlockWrapper>
    );
  }

  return <>{children}</>;
};

export { ContentLoader };

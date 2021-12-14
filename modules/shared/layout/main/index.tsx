import * as React from 'react';
// components
import Header from '@md-ui/header';
// view
import { Wrapper } from './views';

interface Props {
  hideSignInButton?: boolean;
}

const MainLayout: React.FC<Props> = ({ children, hideSignInButton }) => {
  return (
    <Wrapper>
      <Header hideSignInButton={hideSignInButton} />
      {children}
    </Wrapper>
  );
};

export { MainLayout };

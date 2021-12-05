import * as React from 'react';
import Header from '@md-ui/header';
// view components
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

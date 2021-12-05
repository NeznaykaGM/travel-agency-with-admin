import * as React from 'react';
import Header from '@md-ui/header';
// view components
import { Wrapper } from './views';

const MainLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export { MainLayout };

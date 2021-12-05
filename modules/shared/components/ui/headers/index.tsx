import React from 'react';
// components
import { Logo } from '@md-ui/logos/main';
// views
import { LWrapper, WHeader } from './views';

const Header = () => (
  <WHeader>
    <LWrapper>
      <Logo />
    </LWrapper>
  </WHeader>
);

export default Header;

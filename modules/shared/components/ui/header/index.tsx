import React from 'react';
// components
import { Logo } from '@md-ui/logos/main';
// views
import { LogoText, LWrapper, WHeader } from './views';
import Button from '@md-ui/button/main';

const Header = () => {
  const [isScroll, setIsScroll] = React.useState(false);

  React.useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 20) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <WHeader isScroll={isScroll}>
      <LWrapper>
        <Logo />

        <LogoText isScroll={isScroll}>voyage</LogoText>
      </LWrapper>
      <Button preset='primary' title='Login' />
    </WHeader>
  );
};

export default Header;

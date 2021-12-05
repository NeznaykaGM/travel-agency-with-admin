import React from 'react';
// hooks
import { useRouter } from 'next/router';
// components
import { Logo } from '@md-ui/logos/main';
// views
import { LogoText, LWrapper, WHeader } from './views';
import Button from '@md-ui/button/main';

const Header = () => {
  const { push } = useRouter();

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

  const onSingIn = () => push('/sign-in');

  const onHome = () => push('/');

  return (
    <WHeader isScroll={isScroll}>
      <LWrapper onClick={onHome}>
        <Logo />

        <LogoText isScroll={isScroll}>voyage</LogoText>
      </LWrapper>
      <Button preset='primary' title='Sign in' onClick={onSingIn} />
    </WHeader>
  );
};

export default Header;

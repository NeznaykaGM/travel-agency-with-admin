import React, { FC } from 'react';
// components
import Link from 'next/link';
// views
import { Button, BWrapper } from './views';

interface Props {
  url: string;
  title: string;
  asParam?: string;
  onClick?: () => void;
}

const LButton: FC<Props> = ({ url, title, onClick, asParam }) => {
  return (
    <BWrapper onClick={onClick}>
      <Link href={url} as={asParam}>
        <Button>{title}</Button>
      </Link>
    </BWrapper>
  );
};

export default LButton;

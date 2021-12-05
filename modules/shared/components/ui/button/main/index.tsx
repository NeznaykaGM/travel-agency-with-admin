import React from 'react';
// views
import { BWrapper, WButton } from './views';

interface props {
  title: string;
  onClick?: () => void;
}

const Button: React.FC<props> = ({ title, onClick }) => {
  return (
    <BWrapper onClick={onClick}>
      <WButton>{title}</WButton>
    </BWrapper>
  );
};

export default Button;

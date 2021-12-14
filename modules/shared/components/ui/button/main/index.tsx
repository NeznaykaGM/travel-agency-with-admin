import React from 'react';
// types
import { ButtonPresets } from '@md-ui/button/main/presets';
// views
import { BWrapper, WButton } from './views';

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick?: () => void;
  preset?: ButtonPresets;
}

const Button: React.FC<props> = ({ title, onClick, preset = 'default', ...rest }) => {
  return (
    <BWrapper onClick={onClick} {...rest}>
      <WButton preset={preset}>{title}</WButton>
    </BWrapper>
  );
};

export default Button;

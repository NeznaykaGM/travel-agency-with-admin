import React from 'react';
// types
import { ButtonPresets } from '@md-ui/button/main/presets';
// views
import { BWrapper, WButton } from './views';

interface props {
  title: string;
  onClick?: () => void;
  preset?: ButtonPresets;
}

const Button: React.FC<props> = ({ title, onClick, preset = 'default' }) => {
  return (
    <BWrapper onClick={onClick}>
      <WButton preset={preset}>{title}</WButton>
    </BWrapper>
  );
};

export default Button;

import React from 'react';
// types
import { Trip } from '@md-modules/shared/mock';
// components
import IconButton from '@md-ui/button/icon-button';
// views
import {
  Photo,
  Wrapper,
  ButtonsWrapper,
  Title,
  PTWrapper,
  Price
} from '@md-modules/agency/control-panel/layers/presentation/components/card/views';

interface Props {
  data: Trip;
  onEdit: (data: Trip) => void;
  onRemove: (id: string) => void;
}

const Card: React.FC<Props> = ({ data, onRemove, onEdit }) => {
  return (
    <Wrapper>
      <PTWrapper>
        <Photo src={data.img} />
        <Title>{data.title}</Title>
      </PTWrapper>

      <Price>${data.price}</Price>

      <ButtonsWrapper>
        <IconButton preset='trash' onClick={() => onRemove(data.id)} />
        <IconButton preset='bluePencil' onClick={() => onEdit(data)} />
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Card;

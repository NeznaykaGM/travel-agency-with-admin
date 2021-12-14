import React from 'react';
// hooks
import { useRouter } from 'next/router';
// types
import { Trip } from '@md-modules/shared/mock';
// components
import ImageButton from '@md-ui/button/image-button';
// views
import { Icon, PriceWrapper, Price, LPWrapper, SubTitle, Title, LPContainer, Photo, Wrapper } from './views';

interface Props {
  data: Trip;
}

const Card: React.FC<Props> = ({ data }) => {
  const { push } = useRouter();

  const onViewDetails = () => push(`/trip-details/${data.id}`);

  return (
    <Wrapper>
      <Photo src={data.img} alt={data.img} />

      <Title>{data.title}</Title>

      <LPWrapper>
        <LPContainer>
          <Icon src='/static/images/location-marker.png' alt='location-marker' />
          <SubTitle>{data.country}</SubTitle>
        </LPContainer>

        <LPContainer>
          <Icon src='/static/images/calendar.png' alt='calendar' />
          <SubTitle>{data.period} days</SubTitle>
        </LPContainer>
      </LPWrapper>

      <PriceWrapper>
        <Price>${data.price}</Price>/Per person
      </PriceWrapper>

      <ImageButton onClick={onViewDetails}>view more</ImageButton>
    </Wrapper>
  );
};

export default Card;

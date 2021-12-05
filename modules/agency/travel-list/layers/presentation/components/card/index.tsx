import React from 'react';
// hooks
import { useRouter } from 'next/router';
// types
import { Travel } from '@md-modules/shared/mock';
// views
import { Icon, PriceWrapper, Price, LPWrapper, SubTitle, Title, LPContainer, Photo, Wrapper } from './views';
import ImageButton from '@md-ui/button/image-button';

interface Props {
  data: Travel;
}

const Card: React.FC<Props> = ({ data }) => {
  const { push } = useRouter();

  const onViewDetails = () => push(`/travel-details/${data.id}`);

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
          <SubTitle>{data.period}</SubTitle>
        </LPContainer>
      </LPWrapper>

      <PriceWrapper>
        <Price>{data.price}</Price>/Per person
      </PriceWrapper>

      <ImageButton onClick={onViewDetails}>view more</ImageButton>
    </Wrapper>
  );
};

export default Card;

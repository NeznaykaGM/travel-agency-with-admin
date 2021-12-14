import React from 'react';
// context
import { TripDetailsAPIContext } from '../api';
// views
import {
  Icon,
  Photo,
  Price,
  Title,
  Wrapper,
  Description,
  RightContainer,
  SectionsWrapper,
  LPContainer,
  InnerWrapper,
  SubTitle
} from '@md-modules/agency/trip-details/layers/presentation/views';

const TripDetailsPresentation = () => {
  const { trip } = React.useContext(TripDetailsAPIContext);

  return (
    <Wrapper>
      <SectionsWrapper>
        <InnerWrapper>
          <Photo src={trip?.img} alt={trip?.img} />

          <RightContainer>
            <div>
              <LPContainer>
                <Icon src='/static/images/calendar.png' alt='calendar' />
                <SubTitle>{trip?.period} days</SubTitle>
              </LPContainer>

              <LPContainer>
                <Icon src='/static/images/location-marker.png' alt='location-marker' />
                <SubTitle>{trip?.country}</SubTitle>
              </LPContainer>

              <Title>{trip?.title}</Title>

              <Description>{trip?.description}</Description>
            </div>

            <div>
              <Price>${trip?.price}</Price>
            </div>
          </RightContainer>
        </InnerWrapper>
      </SectionsWrapper>
    </Wrapper>
  );
};

export default TripDetailsPresentation;

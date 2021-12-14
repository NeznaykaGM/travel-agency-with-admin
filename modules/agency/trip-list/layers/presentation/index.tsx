import React from 'react';
// libs
import styled from 'styled-components';
// context
import { TripListAPIContext } from '@md-modules/agency/trip-list/layers/api';
// components
import Card from '@md-modules/agency/trip-list/layers/presentation/components/card';

export const CardsWrapper = styled.div`
  display: grid;
  flex-grow: 1;
  grid-gap: 32px;
  overflow: hidden;
  padding: 50px 32px;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 375px));

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TripListPresentation = () => {
  const { trips } = React.useContext(TripListAPIContext);

  return (
    <CardsWrapper>
      {trips?.map((travel) => (
        <Card key={travel.id} data={travel} />
      ))}
    </CardsWrapper>
  );
};

export default TripListPresentation;

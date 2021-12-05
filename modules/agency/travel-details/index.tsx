import React from 'react';
import TravelDetailsPresentation from '@md-modules/agency/travel-details/layers/presentation';
import { TravelDetailsAPIContextProvider } from '@md-modules/agency/travel-details/layers/api';

const TravelDetailsContainer = () => {
  return (
    <TravelDetailsAPIContextProvider>
      <TravelDetailsPresentation />
    </TravelDetailsAPIContextProvider>
  );
};

export default TravelDetailsContainer;

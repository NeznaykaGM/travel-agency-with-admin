import React from 'react';
import TripDetailsPresentation from '@md-modules/agency/trip-details/layers/presentation';
import { TripDetailsAPIContextProvider } from '@md-modules/agency/trip-details/layers/api';

const TripDetailsContainer = () => {
  return (
    <TripDetailsAPIContextProvider>
      <TripDetailsPresentation />
    </TripDetailsAPIContextProvider>
  );
};

export default TripDetailsContainer;

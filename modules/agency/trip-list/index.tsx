import React from 'react';
import TripListPresentation from '@md-modules/agency/trip-list/layers/presentation';
import { TripListAPIContextProvider } from '@md-modules/agency/trip-list/layers/api';

const TripListContainer = () => {
  return (
    <TripListAPIContextProvider>
      <TripListPresentation />
    </TripListAPIContextProvider>
  );
};

export { TripListContainer };

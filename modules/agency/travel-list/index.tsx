import React from 'react';
import TravelListPresentation from '@md-modules/agency/travel-list/layers/presentation';
import { TravelListAPIContextProvider } from '@md-modules/agency/travel-list/layers/api';

const TravelListContainer = () => {
  return (
    <TravelListAPIContextProvider>
      <TravelListPresentation />
    </TravelListAPIContextProvider>
  );
};

export { TravelListContainer };

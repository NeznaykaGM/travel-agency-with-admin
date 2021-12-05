import React from 'react';
// context
import { TravelListAPIContext } from '@md-modules/agency/travel-list/layers/api';
// components
import { ContentLoader } from '@md-ui/loaders/content-loader';
import Card from '@md-modules/agency/travel-list/layers/presentation/components/card';
// view
import { CardsWrapper } from './views';

const TravelListPresentation = () => {
  const { isLoading, travels } = React.useContext(TravelListAPIContext);

  return (
    <ContentLoader isLoading={isLoading}>
      <CardsWrapper>
        {travels?.map((travel) => (
          <Card key={travel.id} data={travel} />
        ))}
      </CardsWrapper>
    </ContentLoader>
  );
};

export default TravelListPresentation;

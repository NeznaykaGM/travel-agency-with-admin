import React from 'react';
//context
import { TravelListAPIContext } from '@md-modules/agency/travel-list/layers/api';
// components
import { ContentLoader } from '@md-ui/loaders/content-loader';
// view
import { Wrapper } from './views';

const TravelListPresentation = () => {
  const { isLoading } = React.useContext(TravelListAPIContext);

  return (
    <Wrapper>
      <ContentLoader isLoading={isLoading}>Hello</ContentLoader>
    </Wrapper>
  );
};

export default TravelListPresentation;

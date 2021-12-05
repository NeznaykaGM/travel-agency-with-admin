import React from 'react';
// context
import { TravelDetailsAPIContext } from '../api';
// components
import { ContentLoader } from '@md-ui/loaders/content-loader';

const TravelDetailsPresentation = () => {
  const { travel, isLoading } = React.useContext(TravelDetailsAPIContext);

  return (
    <ContentLoader isLoading={isLoading}>
      <img src={travel?.img} alt={travel?.img} />
    </ContentLoader>
  );
};

export default TravelDetailsPresentation;

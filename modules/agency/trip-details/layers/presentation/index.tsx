import React from 'react';
// context
import { TripDetailsAPIContext } from '../api';
// components
import { ContentLoader } from '@md-ui/loaders/content-loader';

const TripDetailsPresentation = () => {
  const { travel, isLoading } = React.useContext(TripDetailsAPIContext);

  return (
    <ContentLoader isLoading={isLoading}>
      <img src={travel?.img} alt={travel?.img} />
    </ContentLoader>
  );
};

export default TripDetailsPresentation;

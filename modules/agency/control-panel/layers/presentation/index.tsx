import React from 'react';
// context
import { ControlPanelAPIContext } from '@md-modules/agency/control-panel/layers/api';
// components
import Button from '@md-ui/button/main';
import { ContentLoader } from '@md-ui/loaders/content-loader';
import Card from '@md-modules/agency/control-panel/layers/presentation/components/card';
// views
import { CardsWrapper, CreateButtonWrapper } from '@md-modules/agency/control-panel/layers/presentation/views';

const ControlPanelPresentation = () => {
  const { trips, isLoading, removeTrip } = React.useContext(ControlPanelAPIContext);

  return (
    <>
      <CreateButtonWrapper>
        <Button title='Create Trip' />
      </CreateButtonWrapper>

      <ContentLoader isEmpty={!trips?.length} isLoading={isLoading}>
        <CardsWrapper>
          {trips?.map((trip) => (
            <Card key={trip.id} data={trip} onRemove={removeTrip} />
          ))}
        </CardsWrapper>
      </ContentLoader>
    </>
  );
};

export default ControlPanelPresentation;

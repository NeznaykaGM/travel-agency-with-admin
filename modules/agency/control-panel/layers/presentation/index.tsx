import React from 'react';
// context
import { ControlPanelAPIContext } from '@md-modules/agency/control-panel/layers/api';
// components
import Button from '@md-ui/button/main';
import { ContentLoader } from '@md-ui/loaders/content-loader';
import Card from '@md-modules/agency/control-panel/layers/presentation/components/card';
import CrateTripModal from '@md-modules/agency/control-panel/layers/presentation/components/create-trip-modal';
// views
import { CardsWrapper, CreateButtonWrapper } from '@md-modules/agency/control-panel/layers/presentation/views';

const ControlPanelPresentation = () => {
  const { trips, isLoading, removeTrip } = React.useContext(ControlPanelAPIContext);

  const [createModalIsOpen, setCreateModalIsOpen] = React.useState(false);

  const toggleCreateModal = () => setCreateModalIsOpen((prevState) => !prevState);

  return (
    <>
      <CreateButtonWrapper>
        <Button title='Create Trip' onClick={toggleCreateModal} />
      </CreateButtonWrapper>

      <ContentLoader isEmpty={!trips?.length} isLoading={isLoading}>
        <CardsWrapper>
          {trips?.map((trip) => (
            <Card key={trip.id} data={trip} onRemove={removeTrip} />
          ))}
        </CardsWrapper>
      </ContentLoader>

      <CrateTripModal toggleModal={toggleCreateModal} isOpen={createModalIsOpen} />
    </>
  );
};

export default ControlPanelPresentation;

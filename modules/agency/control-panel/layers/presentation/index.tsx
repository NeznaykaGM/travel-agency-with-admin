import React from 'react';
// hooks
import { useRouter } from 'next/router';
// context
import { ControlPanelAPIContext } from '@md-modules/agency/control-panel/layers/api';
// types
import { Trip } from '@md-modules/shared/mock';
// components
import Button from '@md-ui/button/main';
import Card from '@md-modules/agency/control-panel/layers/presentation/components/card';
import TripModal, { ModalTypes } from '@md-modules/agency/control-panel/layers/presentation/components/trip-modal';
// views
import { CardsWrapper, CreateButtonWrapper } from '@md-modules/agency/control-panel/layers/presentation/views';
// utils
import { cookiesManager } from '@md-utils/cookies';

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

const ControlPanelPresentation = () => {
  const { push } = useRouter();
  const { getToken, removeToken } = cookiesManager();

  const { trips, deleteTrip } = React.useContext(ControlPanelAPIContext);

  // states
  const [currentTrip, setCurrentTrip] = React.useState<Trip>();
  const [createModalState, setCreateModalState] = React.useState<{ type: ModalTypes; status: boolean }>({
    type: 'CREATE',
    status: false
  });

  // methods
  const toggleModal = (type: ModalTypes) => setCreateModalState((prevState) => ({ type, status: !prevState.status }));
  const onEdit = (data: Trip) => {
    toggleModal('EDIT');

    setCurrentTrip(data);
  };
  const onCreate = () => toggleModal('CREATE');

  // effect's
  React.useEffect(() => {
    if (getToken() !== secretKey) {
      push('/');

      removeToken();
    }
  }, []);

  return (
    <>
      <CreateButtonWrapper>
        <Button title='Create Trip' onClick={onCreate} />
      </CreateButtonWrapper>

      <CardsWrapper>
        {trips?.map((trip) => (
          <Card onEdit={onEdit} key={trip.id} data={trip} onRemove={deleteTrip} />
        ))}
      </CardsWrapper>

      <TripModal
        id={currentTrip?.id}
        toggleModal={onCreate}
        defaultValues={currentTrip}
        type={createModalState.type}
        isOpen={createModalState.status}
      />
    </>
  );
};

export default ControlPanelPresentation;

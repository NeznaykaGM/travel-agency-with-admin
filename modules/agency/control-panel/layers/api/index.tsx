import * as React from 'react';
// utils
import { uuid } from 'uuidv4';
import { useLocalStorage } from '@md-utils/localstorage';
// types
import { Trip } from '@md-modules/shared/mock';

export interface CreateTripInput {
  id?: string;
  img: string;
  title: string;
  price: number;
  period: number;
  country: string;
  description: string;
}

interface Context {
  trips?: Trip[];
  deleteTrip: (id: string) => void;
  editTrip: (data: CreateTripInput) => void;
  createTrip: (data: CreateTripInput) => void;
}

const ControlPanelAPIContext = React.createContext<Context>({
  trips: [],
  editTrip: () => {},
  deleteTrip: () => {},
  createTrip: () => {}
});

const ControlPanelAPIContextProvider: React.FC = ({ children }) => {
  const { getTrips, removeTrip, addTrip, updateTrip } = useLocalStorage();

  const [trips, setTrips] = React.useState<Trip[] | undefined>(getTrips());

  const deleteTrip = (tripId: string) => {
    const filteredCart = trips?.filter(({ id }) => id !== tripId);

    removeTrip(filteredCart || []);

    setTrips(getTrips());
  };

  const createTrip = (data: CreateTripInput) => {
    addTrip({ ...data, id: uuid() });

    setTrips(getTrips());
  };

  const editTrip = (data: CreateTripInput) => {
    updateTrip(data);

    setTrips(getTrips());
  };

  return (
    <ControlPanelAPIContext.Provider
      value={{
        trips,
        editTrip,
        createTrip,
        deleteTrip
      }}
    >
      {children}
    </ControlPanelAPIContext.Provider>
  );
};

export { ControlPanelAPIContextProvider, ControlPanelAPIContext };

import * as React from 'react';
// utils
import { useLocalStorage } from '@md-utils/localstorage';
// types
import { Trip } from '@md-modules/shared/mock';

interface Context {
  trips?: Trip[];
  isLoading: boolean;
  removeTrip: (id: string) => void;
}

const ControlPanelAPIContext = React.createContext<Context>({
  trips: [],
  isLoading: false,
  removeTrip: () => {}
});

const ControlPanelAPIContextProvider: React.FC = ({ children }) => {
  const { getTrips, removeTrip } = useLocalStorage();

  const [trips, setTrips] = React.useState<Trip[] | undefined>(getTrips());

  const deleteTrip = (tripId: string) => {
    const filteredCart = trips?.filter(({ id }) => id !== tripId);

    removeTrip(filteredCart || []);

    setTrips(getTrips());
  };

  return (
    <ControlPanelAPIContext.Provider
      value={{
        trips,
        isLoading: false,
        removeTrip: deleteTrip
      }}
    >
      {children}
    </ControlPanelAPIContext.Provider>
  );
};

export { ControlPanelAPIContextProvider, ControlPanelAPIContext };

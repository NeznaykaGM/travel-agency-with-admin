import React from 'react';
// hooks
import { useRouter } from 'next/router';
import { useLocalStorage } from '@md-utils/localstorage';
// mock
import { Trip } from '@md-modules/shared/mock';

interface Context {
  trip?: Trip;
}

const TripDetailsAPIContext = React.createContext<Context>({});

const TripDetailsAPIContextProvider: React.FC = ({ children }) => {
  const { query } = useRouter();
  const { getTrips } = useLocalStorage();

  const trips = getTrips();

  const trip = trips?.find((e) => e.id.toString() == query.id);

  return (
    <TripDetailsAPIContext.Provider
      value={{
        trip
      }}
    >
      {children}
    </TripDetailsAPIContext.Provider>
  );
};

export { TripDetailsAPIContextProvider, TripDetailsAPIContext };

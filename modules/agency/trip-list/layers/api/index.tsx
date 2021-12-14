import * as React from 'react';
// utils
import { useLocalStorage } from '@md-utils/localstorage';
// mock
import { Trip } from '@md-modules/shared/mock';

interface Context {
  trips?: Trip[];
}

const TripListAPIContext = React.createContext<Context>({
  trips: []
});

const TripListAPIContextProvider: React.FC = ({ children }) => {
  const { getTrips } = useLocalStorage();

  return (
    <TripListAPIContext.Provider
      value={{
        trips: getTrips()
      }}
    >
      {children}
    </TripListAPIContext.Provider>
  );
};

export { TripListAPIContextProvider, TripListAPIContext };

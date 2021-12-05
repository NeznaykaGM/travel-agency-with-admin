import * as React from 'react';
// utils
import { useQuery } from '@md-utils/mock/query';
import { useLocalStorage } from '@md-utils/localstorage';
// mock
import { Trip } from '@md-modules/shared/mock';

interface Context {
  trips?: Trip[];
  isLoading: boolean;
}

const TripListAPIContext = React.createContext<Context>({
  trips: [],
  isLoading: false
});

const TripListAPIContextProvider: React.FC = ({ children }) => {
  const { getTrips } = useLocalStorage<Trip>();

  const { data, loading } = useQuery<Trip[]>(getTrips());

  return (
    <TripListAPIContext.Provider
      value={{
        trips: data,
        isLoading: loading
      }}
    >
      {children}
    </TripListAPIContext.Provider>
  );
};

export { TripListAPIContextProvider, TripListAPIContext };

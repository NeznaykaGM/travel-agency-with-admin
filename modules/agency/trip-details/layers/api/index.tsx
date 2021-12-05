import React from 'react';
// hooks
import { useRouter } from 'next/router';
// query
import { useQuery } from '@md-utils/mock/query';
// mock
import { Trip, TRIPS } from '@md-modules/shared/mock';

interface Context {
  travel?: Trip;
  isLoading: boolean;
}

const TripDetailsAPIContext = React.createContext<Context>({
  isLoading: false
});

const TripDetailsAPIContextProvider: React.FC = ({ children }) => {
  const { query } = useRouter();

  const { data, loading } = useQuery(TRIPS.find((e) => e.id.toString() == query.id));

  return (
    <TripDetailsAPIContext.Provider
      value={{
        travel: data,
        isLoading: loading
      }}
    >
      {children}
    </TripDetailsAPIContext.Provider>
  );
};

export { TripDetailsAPIContextProvider, TripDetailsAPIContext };

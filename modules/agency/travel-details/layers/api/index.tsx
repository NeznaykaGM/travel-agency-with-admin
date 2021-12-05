import React from 'react';
// hooks
import { useRouter } from 'next/router';
// query
import { useQuery } from '@md-utils/mock/query';
// mock
import { Travel, TRAVELS } from '@md-modules/shared/mock';

interface Context {
  travel?: Travel;
  isLoading: boolean;
}

const TravelDetailsAPIContext = React.createContext<Context>({
  isLoading: false
});

const TravelDetailsAPIContextProvider: React.FC = ({ children }) => {
  const { query } = useRouter();

  const { data, loading } = useQuery(TRAVELS.find((e) => e.id.toString() == query.id));

  return (
    <TravelDetailsAPIContext.Provider
      value={{
        travel: data,
        isLoading: loading
      }}
    >
      {children}
    </TravelDetailsAPIContext.Provider>
  );
};

export { TravelDetailsAPIContextProvider, TravelDetailsAPIContext };

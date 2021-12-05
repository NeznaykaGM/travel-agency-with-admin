import * as React from 'react';
// utils
import { useQuery } from '@md-utils/mock/query';
// mock
import { Travel, TRAVELS } from '@md-modules/shared/mock';

interface Context {
  travels?: Travel[];
  isLoading: boolean;
}

const TravelListAPIContext = React.createContext<Context>({
  travels: [],
  isLoading: false
});

const TravelListAPIContextProvider: React.FC = ({ children }) => {
  const { data, loading } = useQuery(TRAVELS);

  return (
    <TravelListAPIContext.Provider
      value={{
        travels: data,
        isLoading: loading
      }}
    >
      {children}
    </TravelListAPIContext.Provider>
  );
};

export { TravelListAPIContextProvider, TravelListAPIContext };

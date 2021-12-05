import * as React from 'react';
// utils
import { useQuery } from '@md-utils/mock/query';
// mock
import { Travels, TRAVELS } from '@md-modules/shared/mock';

interface Context {
  products?: Travels[];
  isLoading: boolean;
}

const TravelListAPIContext = React.createContext<Context>({
  products: [],
  isLoading: false
});

const TravelListAPIContextProvider: React.FC = ({ children }) => {
  const { data, loading } = useQuery(TRAVELS);

  return (
    <TravelListAPIContext.Provider
      value={{
        products: data,
        isLoading: loading
      }}
    >
      {children}
    </TravelListAPIContext.Provider>
  );
};

export { TravelListAPIContextProvider, TravelListAPIContext };

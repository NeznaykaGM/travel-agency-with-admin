import { uniqBy } from 'lodash';

export const useLocalStorage = <S>() => {
  const getTrips = () => {
    try {
      return JSON.parse(localStorage.getItem('trips') as string) || [];
    } catch (err) {
      console.error(err);
    }
  };

  const setTrips = (trips: S[]) => {
    const oldTrips = getTrips();

    const tripsArray = oldTrips ? [...trips, ...oldTrips] : trips;

    const filteredTrips = uniqBy(tripsArray, (item) => item.id);

    localStorage.setItem('trips', JSON.stringify(filteredTrips));
  };

  const addTrip = (trips: S[], trip: S) => {
    localStorage.setItem('trips', JSON.stringify([...trips, trip]));
  };

  const removeTrip = (filteredTrips: S[]) => {
    localStorage.setItem('trips', JSON.stringify(filteredTrips));
  };

  const updateTrip = (trips: S[]) => {
    localStorage.setItem('trips', JSON.stringify(trips));
  };

  return {
    addTrip,
    getTrips,
    removeTrip,
    updateTrip,
    setTrips
  };
};

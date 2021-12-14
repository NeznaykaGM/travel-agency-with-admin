import { uniqBy } from 'lodash';
import { Trip } from '@md-modules/shared/mock';
import { CreateTripInput } from '@md-modules/agency/control-panel/layers/api';

export const useLocalStorage = () => {
  // TODO make Either or somethink handle undefined
  const getTrips = (): Trip[] | undefined => {
    try {
      return JSON.parse(localStorage.getItem('trips') as string) || [];
    } catch (err) {
      console.error(err);

      return undefined;
    }
  };

  const setTrips = (trips: Trip[]) => {
    const oldTrips = getTrips();

    const tripsArray = oldTrips ? [...trips, ...oldTrips] : trips;

    const filteredTrips = uniqBy(tripsArray, (item) => item.id);

    localStorage.setItem('trips', JSON.stringify(filteredTrips));
  };

  const addTrip = (trip: Trip) => {
    const trips = getTrips() || [];

    localStorage.setItem('trips', JSON.stringify([trip, ...trips]));
  };

  const removeTrip = (filteredTrips: Trip[]) => {
    localStorage.setItem('trips', JSON.stringify(filteredTrips));
  };

  const updateTrip = (data: CreateTripInput) => {
    const trips = getTrips();

    const editTrip = trips?.map((trip) => (trip.id === data.id ? { ...data } : trip));

    localStorage.setItem('trips', JSON.stringify(editTrip));
  };

  return {
    addTrip,
    getTrips,
    removeTrip,
    updateTrip,
    setTrips
  };
};

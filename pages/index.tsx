import * as React from 'react';
import { MainLayout } from '@md-modules/shared/layouts/main';
import { TripListContainer } from '@md-modules/agency/trip-list';

const TripListPage = () => (
  <MainLayout>
    <TripListContainer />
  </MainLayout>
);

export default TripListPage;

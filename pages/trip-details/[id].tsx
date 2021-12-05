//views
import { MainLayout } from '@md-modules/shared/layouts/main';
import TripDetailsContainer from '@md-modules/agency/trip-details';

const TripDetailsPage = () => {
  return (
    <MainLayout>
      <TripDetailsContainer />
    </MainLayout>
  );
};

export default TripDetailsPage;

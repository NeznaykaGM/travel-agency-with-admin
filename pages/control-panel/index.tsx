import React from 'react';
import ControlPanelContainer from '@md-modules/agency/control-panel';
import { MainLayout } from '@md-modules/shared/layout/main';

const ControlPanelPage = () => (
  <MainLayout hideSignInButton>
    <ControlPanelContainer />
  </MainLayout>
);

export default ControlPanelPage;

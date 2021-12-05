import React from 'react';
import ControlPanelPresentation from '@md-modules/agency/control-panel/layers/presentation';
import { ControlPanelAPIContextProvider } from '@md-modules/agency/control-panel/layers/api';

const ControlPanelContainer = () => (
  <ControlPanelAPIContextProvider>
    <ControlPanelPresentation />
  </ControlPanelAPIContextProvider>
);

export default ControlPanelContainer;

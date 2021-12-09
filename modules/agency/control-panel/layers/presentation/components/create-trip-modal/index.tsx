import React from 'react';
// components
import Modal from '@md-ui/modal';
import { TextField } from '@md-ui/text-field';
import {
  InputWrapper,
  Wrapper
} from '@md-modules/agency/control-panel/layers/presentation/components/create-trip-modal/views';
import Button from '@md-ui/button/main';

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
}

const CrateTripModal: React.FC<Props> = ({ toggleModal, isOpen }) => {
  return (
    <Modal title='Crate Trip' closeButton isOpen={isOpen} toggleModal={toggleModal}>
      <Wrapper>
        <InputWrapper>
          <TextField label='Name' />
        </InputWrapper>
        <InputWrapper>
          <TextField label='Price' />
        </InputWrapper>

        <Button title='Submit' />
      </Wrapper>
    </Modal>
  );
};

export default CrateTripModal;

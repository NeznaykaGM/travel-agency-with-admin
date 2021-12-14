import React from 'react';
// libs
import * as yup from 'yup';
// hooks
import { useFormik } from 'formik';
// context
import { ControlPanelAPIContext } from '@md-modules/agency/control-panel/layers/api';
// components
import Modal from '@md-ui/modal';
import Button from '@md-ui/button/main';
import { TextField } from '@md-ui/text-field';
// views
import {
  InputWrapper,
  Wrapper
} from '@md-modules/agency/control-panel/layers/presentation/components/trip-modal/views';

export type ModalTypes = 'EDIT' | 'CREATE';

export interface DefaultTripModalType {
  title: string;
  price: number;
  period: number;
  country: string;
  description: string;
}

interface Props {
  id?: string;
  isOpen: boolean;
  type: ModalTypes;
  toggleModal: () => void;

  defaultValues?: DefaultTripModalType;
}

const scheme = yup.object().shape({
  title: yup.string().min(5, 'Too Short!').required('Required'),
  country: yup.string().min(5, 'Too Short!').required('Required'),
  price: yup.number().required('Required').positive('Positive Only!'),
  description: yup.string().min(5, 'Too Short!').required('Required'),
  period: yup.number().required('Required').positive('Positive Only!')
});

const TripModal: React.FC<Props> = ({ toggleModal, isOpen, id, type, defaultValues }) => {
  const { createTrip, editTrip } = React.useContext(ControlPanelAPIContext);

  const randomNumber = Math.floor(Math.random() * 100);

  const modalTitle = type === 'CREATE' ? 'Crate Trip' : 'Update Trip';

  const formik = useFormik({
    initialValues: {
      title: '',
      price: 50,
      period: 1,
      country: '',
      description: ''
    },
    validationSchema: scheme,
    onSubmit: (values) => {
      switch (type) {
        case 'CREATE':
          createTrip({
            ...values,
            img: `https://picsum.photos/600/700?random=${randomNumber}`
          });
          break;
        case 'EDIT':
          editTrip({ ...values, id, img: `https://picsum.photos/600/700?random=${randomNumber}` });
          break;
      }

      toggleModal();
    }
  });

  React.useEffect(() => {
    if (type === 'EDIT') {
      if (defaultValues) {
        formik.setValues(defaultValues);
      }

      return;
    }

    formik.handleReset({
      title: '',
      price: 100,
      period: 1,
      country: '',
      description: ''
    });
  }, [isOpen, defaultValues]);

  return (
    <Modal title={modalTitle} closeButton isOpen={isOpen} toggleModal={toggleModal}>
      <Wrapper onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <TextField
            name='title'
            label='Name'
            value={formik.values.title}
            onChange={formik.handleChange}
            errorText={formik.errors.title}
          />
        </InputWrapper>

        <InputWrapper>
          <TextField
            name='description'
            label='Description'
            onChange={formik.handleChange}
            value={formik.values.description}
            errorText={formik.errors.description}
          />
        </InputWrapper>

        <InputWrapper>
          <TextField
            name='country'
            label='Country'
            value={formik.values.country}
            onChange={formik.handleChange}
            errorText={formik.errors.country}
          />
        </InputWrapper>

        <InputWrapper>
          <TextField
            type='number'
            name='period'
            label='Period (day)'
            value={formik.values.period}
            onChange={formik.handleChange}
            errorText={formik.errors.period}
          />
        </InputWrapper>

        <InputWrapper>
          <TextField
            name='price'
            label='Price $'
            type='number'
            value={formik.values.price}
            onChange={formik.handleChange}
            errorText={formik.errors.price}
          />
        </InputWrapper>

        <Button type='submit' title='Submit' />
      </Wrapper>
    </Modal>
  );
};

export default TripModal;

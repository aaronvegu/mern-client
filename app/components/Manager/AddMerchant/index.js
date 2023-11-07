/**
 *
 * AddMerchant
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import Input from '../../Common/Input';
import Button from '../../Common/Button';

const AddMerchant = (props) => {
  const {
    merchantFormData,
    formErrors,
    isSubmitting,
    submitTitle = 'Submit',
    merchantChange,
    addMerchant,
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    addMerchant();
  };

  return (
    <div className='add-merchant'>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['name']}
              label={'Name'}
              name={'name'}
              placeholder={'Nombre completo'}
              value={merchantFormData.name}
              onInputChange={(name, value) => {
                merchantChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['email']}
              label={'Correo Electronico'}
              name={'email'}
              placeholder={'Direccion de email'}
              value={merchantFormData.email}
              onInputChange={(name, value) => {
                merchantChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['phoneNumber']}
              label={'Numero Telefonico'}
              name={'phoneNumber'}
              placeholder={'Numero telefonico'}
              value={merchantFormData.phoneNumber}
              onInputChange={(name, value) => {
                merchantChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['brandName']}
              label={'Empresa'}
              name={'brandName'}
              placeholder={'Nombre de su empresa'}
              value={merchantFormData.brand}
              onInputChange={(name, value) => {
                merchantChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'textarea'}
              error={formErrors['business']}
              label={'Negocio'}
              name={'business'}
              placeholder={'Describa su negocio'}
              value={merchantFormData.business}
              onInputChange={(name, value) => {
                merchantChange(name, value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className='add-merchant-actions'>
          <Button type='submit' text={submitTitle} disabled={isSubmitting} />
        </div>
      </form>
    </div>
  );
};

export default AddMerchant;

/**
 *
 * Edit Address
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import Checkbox from '../../Common/Checkbox';
import Input from '../../Common/Input';
import Button from '../../Common/Button';

const EditAddress = (props) => {
  const { address, addressChange, formErrors, updateAddress, deleteAddress } =
    props;

  const handleSubmit = (event) => {
    event.preventDefault();
    updateAddress();
  };

  return (
    <div className='edit-address'>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12' md='12'>
            <Input
              type={'text'}
              error={formErrors['address']}
              label={'Direccion'}
              name={'address'}
              placeholder={'Direccion: Calle, Numero Ext / Numero Int'}
              value={address.address}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'text'}
              error={formErrors['city']}
              label={'Ciudad'}
              name={'city'}
              placeholder={'Ciudad'}
              value={address.city}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'text'}
              error={formErrors['state']}
              label={'Estado'}
              name={'state'}
              placeholder={'Estado'}
              value={address.state}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'text'}
              error={formErrors['country']}
              label={'Pais'}
              name={'country'}
              placeholder={'Por favor ingrese su pais'}
              value={address.country}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'text'}
              error={formErrors['zipCode']}
              label={'Codigo Postal'}
              name={'zipCode'}
              placeholder={'Por favor ingrese su codigo postal'}
              value={address.zipCode}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Checkbox
              id={'default'}
              label={'Usar como default'}
              name={'isDefault'}
              checked={address.isDefault}
              onChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className='d-flex flex-column flex-md-row'>
          <Button
            type='submit'
            text='Guardar'
            className='mb-3 mb-md-0 mr-0 mr-md-3'
          />
          <Button
            variant='danger'
            text='Eliminar'
            onClick={() => deleteAddress(address._id)}
          />
        </div>
      </form>
    </div>
  );
};

export default EditAddress;

/**
 *
 * AddCategory
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import Input from '../../Common/Input';
import Switch from '../../Common/Switch';
import Button from '../../Common/Button';
import SelectOption from '../../Common/SelectOption';

const AddCategory = (props) => {
  const {
    products,
    categoryFormData,
    formErrors,
    categoryChange,
    addCategory,
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    addCategory();
  };

  return (
    <div className='add-category'>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['name']}
              label={'Nombre'}
              name={'name'}
              placeholder={'Nombre de la categoria'}
              value={categoryFormData.name}
              onInputChange={(name, value) => {
                categoryChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'textarea'}
              error={formErrors['description']}
              label={'Descripcion'}
              name={'description'}
              placeholder={'Descripcion de la categoria'}
              value={categoryFormData.description}
              onInputChange={(name, value) => {
                categoryChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <SelectOption
              error={formErrors['products']}
              label={'Seleccionar Autos'}
              multi={true}
              value={categoryFormData.products}
              options={products}
              handleSelectChange={(value) => {
                categoryChange('products', value);
              }}
            />
          </Col>
          <Col xs='12' md='12' className='my-2'>
            <Switch
              id={'active-category'}
              name={'isActive'}
              label={'Activa?'}
              checked={categoryFormData.isActive}
              toggleCheckboxChange={(value) =>
                categoryChange('isActive', value)
              }
            />
          </Col>
        </Row>
        <hr />
        <div className='add-category-actions'>
          <Button type='submit' text='Agregar categoria' />
        </div>
      </form>
    </div>
  );
};

export default AddCategory;

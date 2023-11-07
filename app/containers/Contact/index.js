/*
 *
 * Contact
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';

class Contact extends React.PureComponent {
  render() {
    const { contactFormData, contactFormChange, contactUs, formErrors } =
      this.props;

    const handleSubmit = (event) => {
      event.preventDefault();
      contactUs();
    };

    return (
      <div className='contact'>
        <h3 className='text-uppercase'>Informacion de Contacto</h3>
        <hr />
        <form onSubmit={handleSubmit}>
          <Row>
            <Col xs='12' md='6'>
              <Input
                type={'text'}
                error={formErrors['name']}
                label={'Nombre'}
                name={'name'}
                placeholder={'Su nombre completo'}
                value={contactFormData.name}
                onInputChange={(name, value) => {
                  contactFormChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='6'>
              <Input
                type={'text'}
                error={formErrors['email']}
                label={'Email'}
                name={'email'}
                placeholder={'Correo Electronico'}
                value={contactFormData.email}
                onInputChange={(name, value) => {
                  contactFormChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='12'>
              <Input
                type={'textarea'}
                error={formErrors['message']}
                label={'Mensaje'}
                name={'message'}
                placeholder={'Describa su mensaje o solicitud'}
                value={contactFormData.message}
                onInputChange={(name, value) => {
                  contactFormChange(name, value);
                }}
              />
            </Col>
          </Row>
          <hr />
          <div className='contact-actions'>
            <Button type='submit' text='Enviar' />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contactFormData: state.contact.contactFormData,
    formErrors: state.contact.formErrors,
  };
};

export default connect(mapStateToProps, actions)(Contact);

/**
 *
 * OrderSummary
 *
 */

import React from 'react';

import { Col } from 'reactstrap';

const OrderSummary = (props) => {
  const { order } = props;

  return (
    <Col className='order-summary pt-3'>
      <h2>Resumen del pedido</h2>
      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Subtotal</p>
        <p className='summary-value ml-auto'>${order.total}</p>
      </div>
      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Impuestos</p>
        <p className='summary-value ml-auto'>${order.totalTax}</p>
      </div>

      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Envio y manejo</p>
        <p className='summary-value ml-auto'>$0</p>
      </div>

      <hr />
      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Total</p>
        <p className='summary-value ml-auto'>${order.totalWithTax}</p>
      </div>
    </Col>
  );
};

export default OrderSummary;

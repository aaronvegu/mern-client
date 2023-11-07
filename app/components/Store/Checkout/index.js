/**
 *
 * Checkout
 *
 */

import React from 'react';

import Button from '../../Common/Button';

const Checkout = (props) => {
  const { authenticated, handleShopping, handleCheckout, placeOrder } = props;

  return (
    <div className='easy-checkout'>
      <div className='checkout-actions'>
        <Button
          variant='primary'
          text='Continuar comprando'
          onClick={() => handleShopping()}
        />
        {authenticated ? (
          <Button
            variant='primary'
            text='Ordenar'
            onClick={() => placeOrder()}
          />
        ) : (
          <Button
            variant='primary'
            text='Proceder a pagos'
            onClick={() => handleCheckout()}
          />
        )}
      </div>
    </div>
  );
};

export default Checkout;

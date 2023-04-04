import React from 'react';

import Payments from './Payments';
import { PaymentMethodForm } from '../Forms';

export const PaymentMethod = ({ usePaymentForm }) => {
  return (
    <section className="payment-method__section">
      <div className="payment-method__top">
        <h4 className="payment-method__title">Payment method</h4>
        <Payments />
      </div>
      <div className="payment-method__form">
        <PaymentMethodForm usePaymentForm={usePaymentForm} />
      </div>
    </section>
  );
};

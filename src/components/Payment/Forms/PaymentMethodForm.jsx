import React from 'react';

import { TextField } from '@mui/material';

export const PaymentMethodForm = ({ usePaymentForm }) => {
  const { register, errors } = usePaymentForm;

  return (
    <form>
      <TextField
        className="form-field w-100"
        placeholder="Card Number"
        autoComplete="off"
        error={!!errors.card}
        {...register('card')}
      />
      <TextField
        className="form-field w-30"
        placeholder="MM"
        autoComplete="off"
        error={!!errors.cardMonth}
        {...register('cardMonth')}
      />
      <TextField
        className="form-field w-30"
        placeholder="YY"
        autoComplete="off"
        error={!!errors.cardYear}
        {...register('cardYear')}
      />
      <TextField
        className="form-field w-30"
        placeholder="CVV"
        autoComplete="off"
        error={!!errors.cardCvv}
        {...register('cardCvv')}
      />
    </form>
  );
};

import React from 'react';
import { useSelector } from 'react-redux';

import { selectUserData } from '../../../redux/slices/userSlice';

import { TextField } from '@mui/material';

export const UserContactForm = ({ useContactForm }) => {
  const { user } = useSelector(selectUserData);

  const [values, _] = React.useState(
    user?.contacts
      ? { ...user.contacts, email: user?.email }
      : {
          firstName: '',
          lastName: '',
          city: '',
          postcode: '',
          address: '',
          email: user?.email,
        }
  );

  const { register, errors } = useContactForm;

  return (
    <form>
      <TextField
        className="form-field w-50"
        placeholder="First Name"
        autoComplete="first-name"
        defaultValue={values.firstName}
        error={!!errors.firstName}
        {...register('firstName')}
      />
      <TextField
        className="form-field w-50"
        placeholder="Last Name"
        autoComplete="last-name"
        defaultValue={values.lastName}
        error={!!errors.lastName}
        {...register('lastName')}
      />
      <TextField
        className="form-field w-50"
        placeholder="City"
        autoComplete="city"
        defaultValue={values.city}
        error={!!errors.city}
        {...register('city')}
      />
      <TextField
        className="form-field w-50"
        placeholder="Postcode"
        autoComplete="postcode"
        defaultValue={values.postcode}
        error={!!errors.postcode}
        {...register('postcode')}
      />
      <TextField
        className="form-field w-100"
        placeholder="Address"
        autoComplete="off"
        defaultValue={values.address}
        error={!!errors.address}
        {...register('address')}
      />
      <TextField
        className="form-field w-100"
        placeholder="Email"
        autoComplete="off"
        defaultValue={values.email}
        error={!!errors.email}
        {...register('email')}
      />
    </form>
  );
};

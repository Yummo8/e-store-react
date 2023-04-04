import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { signUp } from '../../../../redux/slices/authSlice/fetching';
import { signUpSchema } from '../../../../utils/validation';
import { countries, localization, preferredCountries } from '../utils/phoneInput.options';
import { routes } from '../../../../utils';

import { motion } from 'framer-motion';

import { Loader } from '../../Loader';
import { TextField } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

export const SignUpForm = ({ userEmail, animation, delay }) => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(signUpSchema),
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (values) => {
    setIsLoading(true);

    try {
      await dispatch(signUp(values)).unwrap();

      window.location.replace(routes.home);
    } catch (err) {
      handleError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleError = (error) => {
    switch (error) {
      case 'Incorrect email':
        return setError('email', {
          type: 'submit',
          message: 'This email is already used',
        });
      case 'Incorrect username':
        return setError('username', {
          type: 'submit',
          message: 'This username is already used',
        });
      case 'Incorrect email and username':
        [
          {
            type: 'submit',
            name: 'email',
            message: 'This email is already used',
          },
          {
            type: 'submit',
            name: 'username',
            message: 'This username is already used',
          },
        ].forEach(({ name, type, message }) => setError(name, { type, message }));
      default:
        break;
    }
  };

  return (
    <motion.form {...animation} transition={{ delay }} onSubmit={handleSubmit(onSubmit)}>
      <div className="form">
        <div className="form-field">
          <TextField
            label="Username"
            placeholder="Enter your username"
            autoComplete="off"
            error={!!errors.username}
            {...register('username')}
          />
          {!!errors.username && <p className="error-text">{errors.username.message}</p>}
        </div>
        <div className="form-field">
          <PhoneInput
            country="ua"
            onlyCountries={countries}
            localization={localization}
            preferredCountries={preferredCountries}
            inputProps={{
              name: register('phone').name,
              onBlur: register('phone').onBlur,
              ref: register('phone').ref,
              autoComplete: 'off',
            }}
            containerClass={!!errors.phone ? 'error' : ''}
          />
          {!!errors.phone && <p className="error-text">{errors.phone.message}</p>}
        </div>
        <div className="form-field">
          <TextField
            label="Email"
            placeholder="Enter your email"
            autoComplete="off"
            defaultValue={userEmail}
            error={!!errors.email}
            {...register('email')}
          />
          {!!errors.email && <p className="error-text">{errors.email.message}</p>}
        </div>
        <div className="form-field">
          <TextField
            label="Password"
            placeholder="Enter your password"
            type="password"
            autoComplete="new-password"
            error={!!errors.password}
            {...register('password')}
          />
          {!!errors.password && <p className="error-text">{errors.password.message}</p>}
        </div>
      </div>
      <button type="submit" className="modal-form__button">
        {isLoading ? (
          <Loader type="auth" />
        ) : (
          <p className="modal-form__button-text">Sign Up</p>
        )}
      </button>
    </motion.form>
  );
};

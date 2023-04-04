import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { signIn } from '../../../../redux/slices/authSlice/fetching';
import { signInSchema } from '../../../../utils/validation';
import { routes } from '../../../../utils';

import { motion } from 'framer-motion';

import { Loader } from '../../Loader';
import { TextField } from '@mui/material';

export const SignInForm = ({ userEmail, animation, delay, fromPayment }) => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(signInSchema),
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (values) => {
    setIsLoading(true);

    try {
      await dispatch(signIn(values)).unwrap();

      fromPayment
        ? window.location.replace(routes.cart)
        : window.location.replace(routes.home);
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
          message: 'Incorrect email',
        });
      case 'Incorrect password':
        return setError('password', {
          type: 'submit',
          message: 'Incorrect password',
        });
      default:
        break;
    }
  };

  return (
    <motion.form {...animation} transition={{ delay }} onSubmit={handleSubmit(onSubmit)}>
      <div className="form">
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
            autoComplete="current-password"
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

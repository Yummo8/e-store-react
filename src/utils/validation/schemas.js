import * as yup from 'yup';
import * as field from './fields';

export const signUpSchema = yup.object().shape({
  email: field.email,
  username: field.username,
  phone: field.phone,
  password: field.password,
});

export const signInSchema = yup.object().shape({
  email: field.email,
  password: field.password,
});

export const orderSchema = (paymentType) => {
  return yup.object().shape({
    firstName: field.firstName,
    lastName: field.lastName,
    city: field.city,
    postcode: field.postcode,
    address: field.address,
    email: field.email,
    card: paymentType === 'mastercard' ? field.mastercard : field.visa,
    cardMonth: field.cardMonth,
    cardYear: field.cardYear,
    cardCvv: field.cardCvv,
  });
};

import * as yup from 'yup';

export const email = yup
  .string()
  .required('Email is required')
  .email('Enter a valid email');

export const username = yup.string().required('Username is required');

export const phone = yup.string().required('Phone is required');

export const password = yup
  .string()
  .required('Password is required')
  .min(6)
  .matches(
    /^[a-zA-Z0-9]+$/ && /(?:[^`!@#$%"^&*<>|\\\-_=+'\/.,]*[`!@#$%"^&*<>|\\\-_=+'\/.,]){1}/,
    'A-Z, 0-9 and at least 1 special symbol'
  );

export const firstName = yup.string().required('First name is required');

export const lastName = yup.string().required('Last name is required');

export const city = yup.string().required('City is required');

export const postcode = yup.string().required('Postcode is required');

export const address = yup.string().required('Adress is required');

export const visa = yup
  .string()
  .required('Card is required')
  .matches(/^4[0-9]{12}(?:[0-9]{3})?$/, 'Enter a valid card');

export const mastercard = yup
  .string()
  .matches(
    /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
    'Enter a valid card'
  )
  .required('Card is required');

export const cardMonth = yup.number().min(1).max(12).required('Month is required');

export const cardYear = yup
  .number()
  .min(`${new Date().getFullYear()}`.slice(2))
  .required('Year is required');

export const cardCvv = yup.number().min(100).max(999).required('Cvv is required');

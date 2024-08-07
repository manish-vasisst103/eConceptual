import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const loginFormSchema = yupResolver(
  yup
    .object({
      email: yup
        .string()
        .email('Please enter valid email')
        .required('Email is required'),
      password: yup
        .string()
        .trim()
        .min(6, 'Password should be at least six characters')
        .required('Password is required'),
    })
    .required(),
);

export const profileFormSchema = yupResolver(
  yup
    .object({
      email: yup
        .string()
        .email('Please enter valid email')
        .required('Email is required'),
      name: yup.string().required('Name is required'),
      id: yup.number().required(),
      country: yup.string().required('Country is required'),
      city: yup.string().required('City is required'),
      pincode: yup.string().required('Pincode is required'),
    })
    .required(),
);

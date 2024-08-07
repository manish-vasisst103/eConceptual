import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const loginFormSchema = yupResolver(
  yup
    .object({
      email: yup
        .string()
        .email('Please enter valid email')
        .required('Email is required'),
      isMobile: yup.boolean().required(),
      password: yup.string().trim().required('Password is required'),
    })
    .required(),
);

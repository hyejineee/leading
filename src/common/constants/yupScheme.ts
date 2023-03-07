import * as yup from 'yup';
import { AUTH_ERROR_MESSAGE } from './errorMessage';

export const LOGIN_SCHEME = yup.object().shape({
  email: yup.string().email(AUTH_ERROR_MESSAGE.EMAIL).required(AUTH_ERROR_MESSAGE.EMAIL_REQUIRE),
  password: yup
    .string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/, AUTH_ERROR_MESSAGE.PASSWORD)
    .required(AUTH_ERROR_MESSAGE.PASSWORD_REQUIRE),
});

export const x = '';
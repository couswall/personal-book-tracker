import * as yup from 'yup';
import { emailRex } from '../Login/schemaLoginValidations';
import { ERROR_MESSAGES } from './constants';

const regEx = {
    fullName: /^[a-zA-zÀ-ÿÀ-ÿ\u00f1\u00d1\s\-]+$/,
    username: /^[a-zA-Z0-9._]+$/,
    password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).{6,16}/g,
}

export const schemaSignUpValidations = yup.object().shape({
    fullName: yup.string()
        .required(ERROR_MESSAGES.REQUIRED_FIELD)
        .trim()
        .min(3, ERROR_MESSAGES.FULL_NAME.MIN_LENGTH)
        .max(40, ERROR_MESSAGES.FULL_NAME.MAX_LENGTH)
        .matches(regEx.fullName, ERROR_MESSAGES.FULL_NAME.FORMAT)
        .test(
            'not-only-blank-spaces', 
            ERROR_MESSAGES.FULL_NAME.BLANK_SPACES, 
            (value) => value?.trim().length !== 0
        ),
    username: yup.string()
        .required(ERROR_MESSAGES.REQUIRED_FIELD)
        .trim()
        .min(3, ERROR_MESSAGES.USERNAME.MIN_LENGTH)
        .max(30, ERROR_MESSAGES.USERNAME.MAX_LENGTH)
        .matches(regEx.username, ERROR_MESSAGES.USERNAME.FORMAT),
    email: yup.string()
        .required(ERROR_MESSAGES.REQUIRED_FIELD)
        .trim()
        .matches(emailRex, ERROR_MESSAGES.EMAIL.FORMAT),
    password: yup.string()
        .required(ERROR_MESSAGES.REQUIRED_FIELD)
        .trim()
        .min(6, ERROR_MESSAGES.PASSWORD.MIN_LENGTH)
        .max(16,ERROR_MESSAGES.PASSWORD.MAX_LENGTH)
        .matches(regEx.password, ERROR_MESSAGES.PASSWORD.FORMAT),
});
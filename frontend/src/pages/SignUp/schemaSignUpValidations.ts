import * as yup from 'yup';
import { emailRex } from '../Login/schemaLoginValidations';

const regEx = {
    name: /^[a-zA-zÀ-ÿÀ-ÿ\u00f1\u00d1\s\-]/,
    password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).{6,16}/g,
}

export const schemaSignUpValidations = yup.object().shape({
    name: yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters long')
        .max(50, 'Name must be at most 50 characters long')
        .matches(regEx.name, 'Name can only content letters of the alphabet and valid characters')
        .test(
            'not-only-blank-spaces', 
            'Name cannot contain only blank spaces', 
            (value) => value?.trim() !== ''
        ),
    email: yup.string()
        .required('Email is required')
        .matches(emailRex, 'Invalid email'),
    password: yup.string()
        .required('Password is required')
        .min(6,'Password must contain at least 6 characters')
        .max(16,'Password must contain at least 6 characters')
        .matches(regEx.password, 'Password must contain at least 1 uppercase letter, 1 lowercase letter and 1 special character'),
});
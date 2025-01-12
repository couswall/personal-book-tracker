import * as yup from 'yup';

export const emailRex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const schemaLoginValidations = yup.object().shape({
    email: yup.string().required('Email is required').matches(emailRex, 'Invalid email'),
    password: yup.string().required('Password is required')
});
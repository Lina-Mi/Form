import * as yup from 'yup'; 

export const fieldsSchema = yup.object()
    .shape({
        email: yup
		    .string()
            .required('Email is required')
            .matches(/@/, 'Email must contain the @ symbol'),

		password: yup
            .string()
            .required('Password is required')
            .min(5, 'The password must contain a minimum of 5 characters.')
            .max(15, 'The password must contain a maximum of 15 characters.'),
    
       confirmPassword: yup
            .string()
            .required('Please confirm your password') 
            .oneOf([yup.ref('password')], 'Passwords do not match'),
    });


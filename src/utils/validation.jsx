import * as yup from 'yup'; 

export const fieldsSchema = yup.object()
    .shape({
        email: yup
		    .string()
            .matches(/@/, 'Email must contain the @ symbol'),

		password: yup
            .string()
            .min(5, 'The password must contain a minimum of 5 characters.')
            .max(15, 'The password must contain a maximum of 15 characters.'),
    
       confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'Passwords do not match'),
    });


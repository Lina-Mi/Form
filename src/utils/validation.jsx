import * as yup from 'yup'; 

export const emailChangeSchema = yup
    .string()
    .matches(/@/, 'Email must contain the @ symbol');

export const passwordChangeSchema = yup
    .string()
    .max(15, 'The password must contain a maximum of 15 characters.');
    
export const confirmPasswordChangeSchema = yup
    .string()
    .test('passwords-match', 'Passwords do not match', function (value) {
        return this.options.context.password === value;
    });
export const passwordBlurSchema = yup.string()
    .min(5, 'The password must contain a minimum of 5 characters.');

export const validateAndGetErrorMessage = (schema, value, context = null) => {
    let errorMessage = null;

    try {
        schema.validateSync(value, { context });
    } catch ({ errors }) {
        errorMessage = errors
            .reduce((message, error) => message + error + '\n', '')
            .trim();
    }

    return errorMessage;
};
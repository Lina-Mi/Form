import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './form.module.css';
import { fieldsSchema } from './utils';
import { InputField, SubmitButton } from './components';

const sendFormData = (formData) => {
    console.log(formData);
};

export const Form = () => {
	const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
		resolver: yupResolver(fieldsSchema),
		mode: 'onChange',
    });

	const emailError = errors.email?.message;
    const passwordError = errors.password?.message;
    const confirmPasswordError = errors.confirmPassword?.message;

const submitButtonRef = useRef(null);

	return (
		<div className={styles.formContainer}>
			<form onSubmit={handleSubmit(sendFormData)}>
				<InputField
				    label="Email address" 
					type="email"
					placeholder="Email"
					{...register('email')}
				/>
				{emailError && (
                    <span className={styles.error}>
                        {emailError}
                    </span>
                )}
				<InputField
				    label="Password"   
					type="password"
					placeholder="Password"
					{...register('password')}
				/>
				{passwordError && (
                    <span className={styles.error}>
                        {passwordError}
                    </span>
                )}
                <InputField
				    label="Confirm password"
                    type="password"
                    placeholder="Confirm password"
                    {...register('confirmPassword')}
                />
				{confirmPasswordError && (
                    <span className={styles.error}>
                        {confirmPasswordError}
                    </span>
                )}
				<SubmitButton
				    ref={submitButtonRef}
                    type="submit"
	                disabled={
		                !!emailError ||
		                !!passwordError ||
		                !!confirmPasswordError
	                }
                >
	                Submit
                </SubmitButton>
			</form>
		</div>
	);
}; 
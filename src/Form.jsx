import { useState, useRef } from 'react';
import styles from './form.module.css';
import { useStore, sendData, emailChangeSchema, passwordChangeSchema, confirmPasswordChangeSchema, passwordBlurSchema, validateAndGetErrorMessage  } from './utils'; 
import { InputField, SubmitButton } from './components';


export const Form = () => {
	const { getState, setState} = useStore();

	const submitButtonRef = useRef(null);

	const { email, password, confirmPassword } = getState();

	const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

	const onChange = ({ target }) => {
        setState(target.name, target.value);

		if (target.name === 'email') {
            const newError = validateAndGetErrorMessage(
				emailChangeSchema, 
				target.value);
            setEmailError(newError);
		}

        if (target.name === 'password') {
            const newError = validateAndGetErrorMessage(
				passwordChangeSchema, 
				target.value);
            setPasswordError(newError);
			if (target.value.length === 15) {
                submitButtonRef.current.focus();
            }
        } 
	
        

		if (target.name === 'confirmPassword') {
		    const newError = validateAndGetErrorMessage(
				confirmPasswordChangeSchema, 
				target.value, 
				{ password });
            setConfirmPasswordError(newError);
        } 
    };

	const onBlur = ({ target }) => {
        if (target.name === 'password') {
            const newError = validateAndGetErrorMessage(
				passwordBlurSchema, 
				target.value);
            setPasswordError(newError);
        }
    };

	const onSubmit = (event) => {
		event.preventDefault();
		sendData(getState());
	};

	return (
		<div className={styles.formContainer}>
			<form onSubmit={onSubmit}>
				<InputField
				    label="Email address" 
					type="email"
					name="email"
					value={email}
					placeholder="Email"
					onChange={onChange}
				/>
				<span className={styles.error}>{emailError}</span>
				<InputField
				    label="Password"   
					type="password"
					name="password"
					value={password}
					placeholder="Password"
					onChange={onChange}
					onBlur={onBlur}
				/>
				<span className={styles.error}>{passwordError}</span>
                <InputField
				    label="Confirm password"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    placeholder="Confirm password"
                    onChange={onChange}
                />
				<span className={styles.error}>{confirmPasswordError}</span>

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
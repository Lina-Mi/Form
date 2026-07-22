import { useState } from 'react';
import styles from './form.module.css';
import { useStore, sendData } from './utils'; 
import { InputField, SubmitButton } from './components';

export const Form = () => {
	const { getState, updateState} = useStore();

	const { email, password, confirmPassword } = getState();

	const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

	const onChange = ({ target }) => {
        updateState(target.name, target.value);

		if (target.name === 'email') {
            if (!target.value.includes('@')) {
                setEmailError('Email must contain the @ symbol');
            } else {
                setEmailError('');
            }
        }

        if (target.name === 'password') {
            if (target.value.length > 15) {
                setPasswordError('The password must contain a maximum of 15 characters.');
            } else {
                setPasswordError('');
            }
        }

		if (target.name === 'confirmPassword') {
		    if (password !== target.value) {
			    setConfirmPasswordError('Passwords do not match');
		    } else {
			    setConfirmPasswordError('');
		    }
	    } 

    };

	const onBlur = ({ target }) => {
        if (target.name === 'password') {
            if (target.value.length < 5) {
                setPasswordError('The password must contain a minimum of 5 characters.');
            }
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
  
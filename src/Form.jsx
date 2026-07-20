import styles from './form.module.css';
import { useStore, sendData } from './utils'; 
import { Field, SubmitButton  } from './components';

export const Form = () => {
	const { getState, updateState} = useStore();

	const onSubmit = (event) => {
		event.preventDefault();
		sendData(getState());
	};

	const { email, password, confirmPassword } = getState();

	const onChange = ({ target }) => updateState(target.name, target.value);

	return (
		<div className={styles.formContainer}>
			<form onSubmit={onSubmit}>
				<Field
				    label="Email address" 
					type="email"
					name="email"
					value={email}
					placeholder="Email"
					onChange={onChange}
				/>
				<Field
				    label="Password"   
					type="password"
					name="password"
					value={password}
					placeholder="Password"
					onChange={onChange}
				/>
                <Field
				    label="Confirm password"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    placeholder="Confirm password"
                    onChange={onChange}
                />
				<SubmitButton>Submit</SubmitButton>
			</form>
		</div>
	);
};
  
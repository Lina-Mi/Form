import { useState } from 'react';
import styles from './app.module.css';

const initialState = {
	email: '',
	password: '',
  confirmPassword: '',
};

const useStore = () => {
	const [state, setState] = useState(initialState);

	return {
		getState: () => state,
		updateState: (fieldName, newValue) => {
			setState({ ...state, [fieldName]: newValue });
		},
		resetState: () => {
			setState(initialState);
		},
	};
};

const sendData = (formData) => {
	console.log(formData);
};




export const Form = () => {
	const { getState, updateState, resetState } = useStore();

	const onSubmit = (event) => {
		event.preventDefault();
		sendData(getState());
	};

	const { email, password, confirmPassword } = getState();

	const onChange = ({ target }) => updateState(target.name, target.value);

	return (
		<div className={styles.app}>
			<form onSubmit={onSubmit}>
				<input
					type="email"
					name="email"
					value={email}
					placeholder="Email"
					onChange={onChange}
				/>
				<input
					type="password"
					name="password"
					value={password}
					placeholder="Password"
					onChange={onChange}
				/>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm password"
          onChange={onChange}
/>
				<button type="button" onClick={resetState}>
					Reset
				</button>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
  

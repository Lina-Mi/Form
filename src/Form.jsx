import styles from './form.module.css';
import { useStore } from './utils';

const sendData = (formData) => {
	console.log(formData);
}

export const Form = () => {
	const { getState, updateState} = useStore();

	const onSubmit = (event) => {
		event.preventDefault();
		sendData(getState());
	};

	const { email, password, confirmPassword } = getState();

	const onChange = ({ target }) => updateState(target.name, target.value);

	return (
		<div className={styles.form}>
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
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
  

import { forwardRef } from 'react';
import styles from './submitButton.module.css';

export const SubmitButton = forwardRef(({ disabled, children }, ref) => {
	return (
		<button
			ref={ref}
			type="submit"
			className={styles.submitButton}
			disabled={disabled}
		>
			{children}
		</button>
	);
});
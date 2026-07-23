import styles from './submitButton.module.css';

export const SubmitButton = ({ disabled, children }) => { 
  return (
    <button type="submit" className={styles.submitButton} disabled={disabled}>
      {children}
    </button>
  );
};
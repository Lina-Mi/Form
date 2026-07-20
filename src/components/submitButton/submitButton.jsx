import styles from './submitButton.module.css';

export const SubmitButton = ({ disabled, children }) => { // 1. Добавь children в пропсы
  return (
    <button type="submit" className={styles.submitButton} disabled={disabled}>
      {children}
    </button>
  );
};
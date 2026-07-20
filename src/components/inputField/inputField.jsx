import styles from './inputField.module.css';

export const Field = ({ label, type, name, value, placeholder, onChange }) => {
  return (
    <div className={styles.fieldGroup}>
      <label className={styles.label}>
        {label}<span className={styles.required}>*</span>
      </label>
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
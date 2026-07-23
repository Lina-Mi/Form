import styles from './inputField.module.css';

export const InputField = ({ 
  label, 
  type, 
  name, 
  placeholder, 
  ...props
}) => {
  return (
    <div className={styles.fieldGroup}>
      <label className={styles.label}>
        {label}<span className={styles.required}>*</span>
      </label>
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
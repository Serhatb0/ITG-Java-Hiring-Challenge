import styles from "../auth/styles.module.css";
import cn from "classnames";
export const Input = ({
  id,
  name,
  placeholder,
  value,
  errorMessage,
  touched,
  handleChange,
  handleBlur,
  className,
  errorContent,
  ...props
}) => {
  let errorDisplay = <span className={styles.error}>{errorMessage}</span>;
  if (errorContent) {
    errorDisplay = errorContent;
  }

  return (
    <div
      className={
        className === undefined ? cn(styles["input-field"], styles.field) : ""
      }
    >
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
        className={cn(styles.input, className, {
          [styles.valid]: !errorMessage && touched,
          [styles.invalid]: errorMessage && touched,
        })}
      />

      {touched && errorMessage && errorDisplay}
    </div>
  );
};

export default Input;

import styles from "../auth/styles.module.css";
import cn from "classnames";

const Button = ({ content, isLoading, type, className, ...props }) => {
  return (
    <div>
      <button
        disabled={isLoading}
        className={cn(
          styles.button,
          isLoading ? styles.activeLoading : "",
          isLoading && styles.activeButtonHover,
          className
        )}
        type={type}
        {...props}
      >
        {content}
        <span className={cn(styles.load, styles.loading)}></span>
      </button>
    </div>
  );
};

export default Button;

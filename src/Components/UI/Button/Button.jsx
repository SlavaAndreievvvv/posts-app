import clsx from "clsx";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export const Button = ({ className, children, ...props }) => {
  return (
    <button {...props} className={clsx(styles.button, className)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  children: "create post",
};

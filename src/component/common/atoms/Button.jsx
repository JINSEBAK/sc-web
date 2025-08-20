// css
import styles from "./Button.module.css";

import classNames from "classnames";

const Button = ({
  text,
  disabled = false,
  size = "medium", // small || medium || large
  variant = "primary", // primary, secondary, third, translucent
  shape = "square", // square, round
  onClick
}) => {
  return (
    <button
      type="button"
      className={classNames(
        styles.btn,
        styles[size],
        styles[variant],
        styles[shape]
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;

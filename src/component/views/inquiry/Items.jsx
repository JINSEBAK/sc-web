import classNames from "classnames";
import styles from "./Inquiry.module.css";

export const FormItem = ({
  title,
  required = false,
  multiSelectable = false,
  children
}) => {
  return (
    <div className={styles.form}>
      <div className={styles.title}>
        <h4 className={classNames(styles.tt, { [styles.required]: required })}>
          {title}
        </h4>
        {multiSelectable && <span className={styles.multi}>다중선택 가능</span>}
      </div>
      <div className={styles.bd}>{children}</div>
    </div>
  );
};

export const TypeCheck = ({ text, value, name = "", onChange }) => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" value={value} name={name} onChange={onChange} />
      <span>{text}</span>
    </label>
  );
};

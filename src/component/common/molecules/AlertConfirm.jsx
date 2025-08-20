import Button from "../atoms/Button";
import styles from "./AlertConfirm.module.css";

const AlertConfirm = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className={styles["alert-dimmed"]}>
      <div className={styles.alert}>
        <div className={styles["body"]}>
          {title && (
            <p
              className={styles.tit}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
          {message && (
            <p
              className={styles.msg}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
        </div>
        <div className={styles["tail"]}>
          <Button text="취소" onClick={onCancel} variant="primary" />
          <Button text="확인" onClick={onConfirm} variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default AlertConfirm;

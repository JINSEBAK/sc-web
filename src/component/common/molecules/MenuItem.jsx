// css
import styles from "./MenuItem.module.css";

import classNames from "classnames";

const MenuItem = () => {
  return (
    <>
      <button type="button" className={classNames(styles.btn)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
};

export default MenuItem;

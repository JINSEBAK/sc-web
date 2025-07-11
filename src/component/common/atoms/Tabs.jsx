// css
import styles from "./Tabs.module.css";

import classNames from "classnames";

const Tabs = ({ items = [], active, position = "page", onChange }) => {
  return (
    <div className={classNames(styles.container, styles[position])}>
      <ul className={styles.tab}>
        {items.map((item, index) => (
          <li
            key={`tab-${index}`}
            className={classNames(styles.item, {
              [styles.active]: item.value === active
            })}
            onClick={() => onChange(item.value)}
          >
            {item.label && <span>{item.label}</span>}
            <strong>{item.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;

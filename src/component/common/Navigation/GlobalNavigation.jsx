// css
import styles from "./Gnb.module.css";
//
import MenuItem from "../molecules/MenuItem";
import LangItem from "../molecules/LangItem";
import LogoImg from "assets/imgs/logo_head_w.svg";

import { GnbItems } from "../../../datas/constant";

import { Link } from "react-router-dom";
import classNames from "classnames";
import { useState } from "react";

const NaviItem = ({ path, title, isActive, children = [] }) => {
  return (
    <li className={styles["top-dep"]}>
      <div
        className={classNames(styles["dep-1"], {
          [styles.active]: isActive
        })}
      >
        {title}
      </div>
      <ul className={styles["sub-dep"]}>
        {children.map((child, idx) => (
          <li className={styles["dep-2"]} key={`sub-dep-${idx}`}>
            <Link to={child.link}>{child.title}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

const GlobalNavigation = () => {
  //
  const [isOn, setIsOn] = useState(false);

  return (
    <header
      className={classNames(styles.header, { [styles.on]: isOn })}
      onMouseOver={() => setIsOn(true)}
      onMouseLeave={() => setIsOn(false)}
    >
      <div className={styles.inner}>
        <Link to="/ai" className={styles.logo}>
          <img src={LogoImg} alt="SmartCore" />
        </Link>
        <nav onMouseOver={() => setIsOn(true)}>
          <ul className={styles.nav}>
            {GnbItems.map((item, index) => (
              <NaviItem
                key={`nav-${index}`}
                path={item.path}
                title={item.title}
                children={item.children}
                isActive={index === 0}
              />
            ))}
          </ul>
        </nav>
        <div className={styles.btns}>
          <LangItem />
          <MenuItem />
        </div>
      </div>
    </header>
  );
};

export default GlobalNavigation;

// css
import styles from "./GlobalNavigation.module.css";

//
import MenuItem from "../molecules/MenuItem";
import LangItem from "../molecules/LangItem";

import { GnbItems } from "../../../datas/constant";
import LogoImg from "assets/imgs/logo_head_w.svg";

import { Link } from "react-router-dom";
import classNames from "classnames";

const NaviItem = ({ path, title, isActive }) => {
  return (
    <li>
      <Link to={path} className={classNames({ [styles.active]: isActive })}>
        {title}
      </Link>
    </li>
  );
};

const GlobalNavigation = () => {
  //
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/ai" className="logo">
          <img src={LogoImg} alt="SmartCore" />
        </Link>
        <nav>
          <ul className={styles.nav}>
            {GnbItems.map((item, index) => (
              <NaviItem
                key={`nav-${index}`}
                path={item.path}
                title={item.title}
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

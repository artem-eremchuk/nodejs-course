import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Logo from "/public/images/icons/nodejs-logo.svg?react";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <div className={styles.header__logo}>
            <button className={styles.header__logo_btn}>
              <Logo className={styles.header__logo_icon} />
            </button>
            <Link className={styles.header__logo_text} to="/">
              NODE JS
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

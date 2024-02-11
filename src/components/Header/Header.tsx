import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Logo from "/public/images/icons/nodejs-logo.svg?react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <div className={styles.header__logo}>
            <button className={styles.header__burger_btn}>
              <GiHamburgerMenu className={styles.header__burger_icon} />
            </button>
            <Link className={styles.header__logo} to="/nodejs-course/">
              <Logo className={styles.header__logo_icon} />
              <span className={styles.header__logo_text}>NODE JS</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

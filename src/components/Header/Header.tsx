import styles from "./Header.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "/public/images/icons/nodejs-logo.svg?react";
import Sidebar from "../Sidebar/Sidebar";
import Button from "../ui-kit/Button/Button";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            onSidebarClose={() => setIsSidebarOpen(false)}
          />
          <div className={styles.header__logo}>
            <Button
              className={styles.header__burger_btn}
              onClick={(e) => {
                e.stopPropagation();
                setIsSidebarOpen(!isSidebarOpen);
              }}
            >
              <GiHamburgerMenu className={styles.header__burger_icon} />
            </Button>
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

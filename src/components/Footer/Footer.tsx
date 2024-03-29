import styles from './Footer.module.scss'
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <Link
            className={styles.footer__link}
            to={"https://telegram.me/artyom_eremchuk"}
            target="_blank"
          >
            Created by Artyom Eremchuk
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer
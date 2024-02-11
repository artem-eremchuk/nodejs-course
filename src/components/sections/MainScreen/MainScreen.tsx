import styles from "./MainScreen.module.scss";
import { Link } from "react-router-dom";

const MainScreen = () => {
  return (
    <section className={styles.main__screen}>
      <div className="container">
        <div className={styles.main__screen_wrapper}>
          <div className={styles.main__screen_text}>
            <h2 className={styles.main__screen_title}>Приветствую, друг!</h2>
            <p className={styles.main__screen_description}>В поискe знаний?</p>
          </div>
          <Link className={styles.main__screen_link} to={""}>
            Тыкай!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainScreen;

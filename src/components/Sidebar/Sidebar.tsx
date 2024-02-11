import styles from "./Sidebar.module.scss";
import { ImCross } from "react-icons/im";

interface ISidebar {
  isSidebarOpen: boolean;
  onSidebarClose: () => void;
}

const Sidebar: React.FC<ISidebar> = ({ isSidebarOpen, onSidebarClose }) => {
  return (
    <div className={`${styles.sidebar} ${isSidebarOpen && styles.open}`}>
      <div className={styles.sidebar__header}>
        <div className={styles.sidebar__header_title}>Список тем</div>
        <button
          className={styles.sidebar__close_btn}
          onClick={() => onSidebarClose()}
        >
          <ImCross className={styles.sidebar__close_icon} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

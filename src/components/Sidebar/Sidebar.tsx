import styles from "./Sidebar.module.scss";
import { useRef, useEffect } from "react";
import { ImCross } from "react-icons/im";

interface ISidebar {
  isSidebarOpen: boolean;
  onSidebarClose: () => void;
}

const Sidebar: React.FC<ISidebar> = ({ isSidebarOpen, onSidebarClose }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      e.stopPropagation();

      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        {
          onSidebarClose();
        }
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [onSidebarClose]);

  return (
    <div
      className={`${styles.sidebar} ${isSidebarOpen && styles.open}`}
      ref={sidebarRef}
    >
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

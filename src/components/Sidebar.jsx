import styles from "./Sidebar.module.css";

console.log("styles", styles.sidebar);

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.iconList}>
        <li>
          <i className="far fa-bars"></i>
        </li>
        <li className={styles.selected}>
          <i className="far fa-inbox"></i>
        </li>
        <li>
          <i className="far fa-star"></i>
        </li>
        <li>
          <i className="far fa-paper-plane"></i>
        </li>
        <li>
          <i className="far fa-user-circle"></i>
        </li>
        <li>
          <i className="far fa-exclamation-square"></i>
        </li>
        <li>
          <i className="far fa-trash-alt"></i>
        </li>
      </ul>
      <ul className={`${styles.iconList} ${styles.bottomIcon}`}>
        <li>
          <i className="far fa-moon"></i>
        </li>
        <li>
          <i className="far fa-cog"></i>
        </li>
        <li>
          <i className="far fa-question-circle"></i>
        </li>
      </ul>
    </div>
  );
}

import styles from "./Menu.module.css";

export default function Menu() {
  const logout = (event) => {
    event.stopPropagation();
    localStorage.removeItem("token");
    localStorage.removeItem("data");
    window.location.reload();
  };

  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <i className="far fa-user-circle"></i>
          Profile
        </li>
        <li className={styles.separator}></li>
        <li onClick={logout}>
          <i className="far fa-sign-out"></i>
          Logout
        </li>
      </ul>
    </div>
  );
}

import { stripHtml } from "string-strip-html";
import friendlyDate from "../../utils/friendlyDate";
import Avatar from "../Avatar";
import styles from "./EmailListItem.module.css";

export default function EmailListItem({ email, selected, onClick }) {
  return (
    <div
      key={email.internal_id}
      onClick={onClick}
      className={`${styles.emailListItem}${selected ? " selected" : ""}`}
    >
      <Avatar name={email.from_name} email={email.from_addr} size={30} />
      <div className={styles.emailHeader}>
        <div className={styles.received}>
          <i className="far fa-paperclip"></i>
          {friendlyDate(email.date, true)}
        </div>
        <div className={styles.sender}>{email.from_name}</div>
        <div className={styles.subject}>{email.subject}</div>
        <div className={styles.action}>
          <i className="far fa-star"></i>
        </div>
        <div className={styles.body}>
          {email.body ? stripHtml(email.body).result : "No preview available"}
        </div>
        <div className={styles.iconContainer}>
          <i className={`far fa-archive ${styles.icon}`}></i>
          <i className={`far fa-trash-alt ${styles.icon}`}></i>
          <i className={`far fa-envelope-open ${styles.icon}`}></i>
        </div>
      </div>
    </div>
  );
}

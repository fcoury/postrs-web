import { stripHtml } from "string-strip-html";
import friendlyDate from "../../utils/friendlyDate";
import Avatar from "../Avatar";

export default function EmailListItem({ email, selected, onClick }) {
  return (
    <div
      key={email.internal_id}
      onClick={onClick}
      className={`email-list-item${selected ? " selected" : ""}`}
    >
      <Avatar name={email.from_name} email={email.from_addr} size={30} />
      <div className="email-header">
        <div className="received">
          <i className="far fa-paperclip"></i>
          {friendlyDate(email.date, true)}
        </div>
        <div className="sender">{email.from_name}</div>
        <div className="subject">{email.subject}</div>
        <div className="action">
          <i className="far fa-star"></i>
        </div>
        <div className="body">
          {email.body ? stripHtml(email.body).result : "No preview available"}
        </div>
      </div>
    </div>
  );
}

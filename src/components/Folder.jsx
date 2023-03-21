import useEmails from "../hooks/useEmails";
import "./Folder.css";

export default function Folder() {
  const { data: emails, isLoading } = useEmails();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="folder">
      <div className="title">
        <h1>Inbox</h1>
        <div className="search-box">
          <i className="far fa-search"></i>
          <input aria-label="Search" placeholder="Search" type="search" />
        </div>
      </div>
      <div className="email-list">
        {emails.map((email) => (
          <div key={email.internal_id} className="email-list-item">
            <div className="avatar"></div>
            <div className="email-header">
              <div className="received">
                <i className="far fa-paperclip"></i>
                {new Date(email.date).toLocaleTimeString()}
              </div>
              <div className="sender">{email.from_name}</div>
              <div className="subject">{email.subject}</div>
              <div className="action">
                <i className="far fa-star"></i>
              </div>
              <div className="body">{email.body || "No preview available"}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

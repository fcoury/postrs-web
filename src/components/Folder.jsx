import { useAppState } from "../AppState";
import useEmails from "../hooks/useEmails";
import "./Folder.css";

export default function Folder() {
  const { emails, isLoading, error } = useEmails();
  const { state, dispatch } = useAppState();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) return <div>Error: {error.message}</div>;

  const handleEmailClick = (email) => {
    dispatch({ type: "setSelectedEmail", payload: email });
  };

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
          <div
            key={email.internal_id}
            onClick={() => handleEmailClick(email)}
            className={`email-list-item${
              state.email && state.email.internal_id === email.internal_id
                ? " selected"
                : ""
            }`}
          >
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

import { useCallback } from "react";
import useEmailBody from "../../hooks/useEmailBody";
import useEmails from "../../hooks/useEmails";
import { useAppState } from "../../state/AppState";
import EmailListItem from "./EmailListItem";
import "./Folder.css";

export default function Folder() {
  const { emails, isLoading, error } = useEmails();
  const { state, dispatch } = useAppState();
  const { data: emailBodyData, refetch: refetchEmailBody } = useEmailBody(
    state.email?.internal_id
  );

  const handleEmailClick = useCallback(
    async (email) => {
      dispatch({ type: "setSelectedEmail", payload: email });

      if (email.body === undefined) {
        const newEmailBodyData = await refetchEmailBody();
        dispatch({
          type: "setSelectedEmail",
          payload: { ...email, body: newEmailBodyData.body },
        });
      }
    },
    [dispatch, refetchEmailBody]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) return <div>Error: {error.message}</div>;

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
          <EmailListItem
            email={email}
            selected={
              state.email && state.email.internal_id === email.internal_id
            }
            onClick={() => handleEmailClick(email)}
          />
        ))}
      </div>
    </div>
  );
}

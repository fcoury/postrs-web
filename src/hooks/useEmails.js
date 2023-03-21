import { useQuery } from "react-query";
import { useAppState } from "../AppState";

const useEmails = () => {
  const { state, dispatch } = useAppState();

  const fetchEmails = async () => {
    const response = await fetch(
      "https://postrs.gistia.online/api/inbox/emails",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await response.json();
    return data;
  };

  const { data, isLoading, error } = useQuery("emails", fetchEmails, {
    onSuccess: (emails) => {
      dispatch({ type: "setEmails", payload: emails });
    },
  });

  return {
    emails: state.emails,
    isLoading,
    error,
  };
};

export default useEmails;

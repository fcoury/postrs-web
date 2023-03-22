// useEmails.js
import { useQuery } from "react-query";
import { useAppState } from "../state/AppState";
import { fetchData } from "./api";

const useEmails = () => {
  const { state, dispatch } = useAppState();

  const { data, isLoading, error } = useQuery(
    "emails",
    () => fetchData("/inbox/emails"),
    {
      onFetching: () => {
        dispatch({ type: "setLoadingEmails", payload: true });
      },
      onSuccess: (emails) => {
        dispatch({ type: "setLoadingEmails", payload: false });
        dispatch({ type: "setEmails", payload: emails });
      },
      onError: () => {
        dispatch({ type: "setLoadingEmails", payload: false });
      },
    }
  );

  return {
    emails: state.emails,
    isLoading,
    error,
  };
};

export default useEmails;

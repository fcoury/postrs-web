import { useQuery } from "react-query";

const useEmails = () => {
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

  return useQuery("emails", fetchEmails);
};

export default useEmails;

import { useState } from "react";
import MicrosoftLogin from "react-microsoft-login";
import Email from "../components/Email";
import Folder from "../components/Folder";
import Sidebar from "../components/Sidebar";

const config = {
  issuer: import.meta.env.VITE_ISSUER,
  clientId: import.meta.env.VITE_CLIENT_ID,
  scopes: import.meta.env.VITE_SCOPES.split(" "),
};

export default function Main() {
  const [msalInstance, onMsalInstanceChange] = useState();
  const loggedIn = localStorage.getItem("token");

  const loginHandler = (err, data, msal) => {
    if (!err && data) {
      localStorage.setItem("token", data.accessToken);
      onMsalInstanceChange(msal);
    }
  };

  if (!loggedIn) {
    return (
      <MicrosoftLogin
        clientId={config.clientId}
        authCallback={loginHandler}
        tenantUrl={config.issuer}
        graphScopes={config.scopes}
        withUserData={true}
        useLocalStorageCache={true}
      />
    );
  }

  return (
    <>
      <Sidebar />
      <Folder />
      <Email />
    </>
  );
}

import { useState } from "react";
import MicrosoftLogin from "react-microsoft-login";
import Email from "../components/Email";
import Folder from "../components/Folder";
import Sidebar from "../components/Sidebar";

const config = {
  issuer: process.env.REACT_APP_ISSUER,
  clientId: process.env.REACT_APP_CLIENT_ID,
  scopes: process.env.REACT_APP_SCOPES.split(" "),
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

import React, { createContext, useContext, useReducer } from "react";

const AppStateContext = createContext();

const initialState = {
  emails: [],
  email: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "setEmails":
      return { ...state, emails: action.payload };
    case "clearEmails":
      return { ...state, emails: [] };
    case "removeEmail":
      return {
        ...state,
        emails: state.emails.filter(
          (email) => email.internal_id !== action.payload
        ),
      };
    case "setSelectedEmail":
      return { ...state, email: action.payload };
    default:
      throw new Error();
  }
}

export function AppStateProvider({ children, initialEmails = [] }) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    emails: initialEmails,
  });

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);

  if (context === undefined) {
    throw new Error("useAppState must be used within a AppStateProvider");
  }

  return context;
}

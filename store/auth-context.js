import React from "react";
import ModalDisplay from "../components/Modal";
import { useState } from "react";
const AuthContext = React.createContext({
  Token: () => {},
  settingToken: (value) => {},
  removeToken: () => {},
});

export const AuthContextProvider = (props) => {
  const Token = () => {
    var bearerToken = localStorage.getItem("Token");
    return bearerToken;
  };

  const removeToken = () => {
    localStorage.removeItem("Token");
  };

  const setBearerToken = (value) => {
    localStorage.setItem("Token", value);
  };

  return (
    <AuthContext.Provider
      value={{
        Token: Token,
        removeToken: removeToken,
        settingToken: setBearerToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

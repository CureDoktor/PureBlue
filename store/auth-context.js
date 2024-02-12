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
    //Live
    // var bearerToken = localStorage.getItem("Token");

    //Testing
    var bearerToken =
      "cwForraUjGkzQ47MEXBWaZh3T1hA7hhfSSpYKhnF5I0ixDeGll3UEQHQmCzys-g5bA6i6_ZM96tlFFdOArtL-NXBP46Jl4YG9jV3qOJLBEe-chL2UG-YR99jrOEOdFGISxVIkhokUBTMsGipygpZX1iYJtQOnHEjlTOHLK-83FiZyKNfthmSXWIImi--FnV25uyAFidF";
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

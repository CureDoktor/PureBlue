import React from "react";

const AuthContext = React.createContext({
  BearerToken: "None",
});

export default AuthContext;

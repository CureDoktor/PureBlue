import React, { useState } from "react";

const AuthContext = React.createContext({
  Token:
    "yfFDRt6gzmgVFu0DFiooC7L8R9sujnx1rDRVDgc7VPgEWXFgW9FDq8BybrEpy0qJaFwqsutfP7fceKKbe2-nbEsgue-xQlCYOerkCWKqWYxPVdmgdDaFRUgZTo3fjYDu0giyFajpOFK7t4JZVBxvh112zOwUTRKdNNLxNg90WJ0iXVh1oL8Eko8QdO6PxTq8fkEw5OyJ",
  settingToken: (value) => {},
});

export const AuthContextProvider = (props) => {
  const [Token, setToken] = useState(
    "yfFDRt6gzmgVFu0DFiooC7L8R9sujnx1rDRVDgc7VPgEWXFgW9FDq8BybrEpy0qJaFwqsutfP7fceKKbe2-nbEsgue-xQlCYOerkCWKqWYxPVdmgdDaFRUgZTo3fjYDu0giyFajpOFK7t4JZVBxvh112zOwUTRKdNNLxNg90WJ0iXVh1oL8Eko8QdO6PxTq8fkEw5OyJ"
  );

  const setBearerToken = (value) => {
    setToken(value);
  };
  return (
    <AuthContext.Provider
      value={{ Token: Token, settingToken: setBearerToken }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

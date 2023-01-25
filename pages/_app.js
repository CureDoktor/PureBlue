import "../styles/globals.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../pages/login";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import AuthContext from "../store/auth-context";

function MyApp({ Component, pageProps }) {
  const [isLogedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginChange = () => {
    if (isLogedIn) {
      return (
        <AuthContext.Provider>
          <Header logout={logoutHandler} header={isLogedIn} />
          <Component {...pageProps} />
          <Footer />
        </AuthContext.Provider>
      );
    } else {
      return (
        <React.Fragment>
          <Header logout={loginHandler} header={isLogedIn} />
          <Login isLoggedIn={loginHandler} />
          <Footer />
        </React.Fragment>
      );
    }
  };

  return loginChange();
}

export default MyApp;

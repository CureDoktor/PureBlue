import "../styles/globals.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";
import Login from "../pages/login";
import Register from "../pages/register";
import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { AuthContextProvider } from "../store/auth-context";
import ConsultationContextProvider from "../store/consultation-context";
import ModalDisplay from "../components/Modal";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLogedIn, setIsLoggedIn] = useState(false);
  const [footerEnable, setFooterEnable] = useState(true);
  const [accountEnable, setAccountEnable] = useState(true);
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (
      router.pathname.includes("/transition-page") ||
      router.pathname.includes("/questions") ||
      router.pathname.includes("/medical-profile-questions") ||
      router.pathname.includes("/sildenafil-order-flow")
    ) {
      setFooterEnable(false);
    } else {
      setFooterEnable(true);
    }
  }, [router]);

  const [show, setShow] = useState(false);
  const [showMessage, setShowMessage] = useState("");

  const handleShow = (value) => {
    setShow(true);
    setShowMessage(value);
  };
  const handleClose = () => {
    setShow(false);
  };

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("Token");
    setIsLoggedIn(false);
    router.push("/");
  };

  const loginChange = () => {
    if (isLogedIn) {
      return (
        <AuthContextProvider>
          <Head>
            <title>TryPure Blue</title>
          </Head>
          <ModalDisplay
            show={show}
            showMessage={showMessage}
            handleClose={handleClose}
          />
          <Header logout={logoutHandler} header={isLogedIn} />
          <Component
            handleShow={handleShow}
            isLoggedIn={loginHandler}
            {...pageProps}
          />
          {footerEnable && <Footer />}
        </AuthContextProvider>
      );
    } else if (
      Component.name == "Account" ||
      Component.name == "VisitForm" ||
      Component.name == "Switch" ||
      Component.name == "Order"
    ) {
      return (
        <AuthContextProvider>
          <Head>
            <title>TryPure Blue</title>
          </Head>
          <ModalDisplay
            show={show}
            showMessage={showMessage}
            handleClose={handleClose}
          />
          <Header logout={loginHandler} header={isLogedIn} />
          <Login handleShow={handleShow} isLoggedIn={loginHandler} />
          {footerEnable && <Footer />}
        </AuthContextProvider>
      );
    } else {
      return (
        <AuthContextProvider>
          <Head>
            <title>TryPure Blue</title>
          </Head>
          <ModalDisplay
            show={show}
            showMessage={showMessage}
            handleClose={handleClose}
          />
          <Header logout={loginHandler} header={isLogedIn} />
          <Component
            handleShow={handleShow}
            isLoggedIn={loginHandler}
            {...pageProps}
          />
          {footerEnable && <Footer />}
        </AuthContextProvider>
      );
    }
  };
  return (
    <ConsultationContextProvider>{loginChange()}</ConsultationContextProvider>
  );
}

export default MyApp;

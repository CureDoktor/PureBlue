import React from "react";
import styles from "./styles.module.scss";
import Form from "react-bootstrap/Form";
import { Col, Container, Button, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useEffect, useContext } from "react";
import { redirect, useSearchParams } from "next/navigation";
import Axios from "axios";
import { useRouter } from "next/router";
import AuthContext from "../../store/auth-context";
import { Spinner } from "react-bootstrap";
import Link from "next/link";
import { Pause } from "react-bootstrap-icons";

export default function OneTimeLogin(props) {
  const [redirectUrl, setRedirectUrl] = useState("");
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setTimeout(function () {
      let getUrl = searchParams.get("redirect_to");

      if (getUrl != null) {
        handleSubmit();
      }
    }, 3000);
  }, [searchParams]);

  const handleSubmit = async () => {
    const one_time_login_token = searchParams.get("token");
    const one_time_login_email = searchParams.get("email");

    const route = "/api/auth/one-time-login";
    const payload = {
      token: one_time_login_token,
      email: one_time_login_email,
    };

    try {
      const rese = await Axios.post(route, payload)
        .then((res) => {
          authCtx.settingToken(res.data.data.access_token);
          props.isLoggedIn();

          router.push("/" + searchParams.get("redirect_to"));
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Container className={styles.container}>
        <Spinner animation="border" variant="primary" />
      </Container>
    </>
  );
}

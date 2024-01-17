import Link from "next/link";
import Head from "next/head";
import React from "react";
import { useEffect, useContext, useState } from "react";
import {
  Col,
  Container,
  FormSelect,
  Image,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Row,
} from "react-bootstrap";
import { CaretDownFill, List } from "react-bootstrap-icons";
import styles from "./styles.module.scss";
import Axios from "axios";
import AuthContext from "../../store/auth-context";

export default function Case(props) {
  const [CaseAnswers, setCaseAnswers] = useState("");
  const authCtx = useContext(AuthContext);
  const getCase = async () => {
    const route = "/api/case/get-case";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          setCaseAnswers(res.data.data.case_answers);
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCase();
  }, []);

  return (
    <div>
      {Object.entries(CaseAnswers).map(([key, value]) => {
        key.toString();
        let question = key.replaceAll("_", " ");
        let answer = value;
        let whole = question + ": " + answer;
        if (answer == "") {
          whole = "";
        }
        return (
          <div key={key}>
            {whole}
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}

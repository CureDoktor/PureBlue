import Head from "next/head";
import { useContext, useState, React } from "react";
import { Col, Container, Button, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import styles from "./styles.module.scss";
import Orders from "../../components/Orders";
import Membership from "../../components/Membership";
import Profile from "../../components/Profile";
import Case from "../../components/Case";
export default function Account(props) {
  const [content, setContent] = useState(<Membership />);

  const handleSelect = (link) => {
    if (link === "Membership") {
      setContent(<Membership handleShow={props.handleShow} />);
    } else if (link === "Orders") {
      setContent(<Orders handleShow={props.handleShow} />);
    } else if (link === "Profile") {
      setContent(<Profile handleShow={props.handleShow} />);
    } else if (link === "Case") {
      setContent(<Case handleShow={props.handleShow} />);
    } else if (link === "Verification") {
      <Verification handleShow={props.handleShow} />;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Pure Blue - Account</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/faviconn.ico" />
      </Head>
      <main className={styles.accountPage}>
        <Container>
          <Nav
            variant="tabs"
            className={styles.navbar}
            defaultActiveKey="/home"
            onSelect={handleSelect}
          >
            <Nav.Item>
              <Nav.Link eventKey="Membership">Membership</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Orders">Orders</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Profile">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Case">Case</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ID Verification">ID Verification</Nav.Link>
            </Nav.Item>
          </Nav>
          <br />
          <br />
          {content}
        </Container>
      </main>
    </div>
  );
}

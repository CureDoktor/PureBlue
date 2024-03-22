import { Container } from "react-bootstrap";
import { useRouter } from "next/navigation";
import CardSection from "./CardSection";
import ButtonSection from "./ButtonSection";
import Frequently from "./FrequentlyAsked";
import Health from "./Health";
import Popular from "./Popular";
import Service from "./Service";
import Treatment from "./Treatment";
import Explore from "./Explore";
import SearchButton from "./SearchBtn";
import VideoPlayer from "../VideoPlayer";
import styles from "./home.styles.module.scss";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Recommended from "../Recommended";
import FindTreatment from "../FindTreatment";
import EmailAddress from "../EmailAddress";
import FirstLastName from "../FirstLastName";

const HomePage = (props) => {
  const router = useRouter();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [content, setContent] = useState(0);
  const chooseContent = () => {
    if (content == 0) {
      return <FindTreatment setContent={setContent} />;
    } else if (content == 1) {
      return <EmailAddress props={props} setContent={setContent} />;
    } else if (content == 2) {
      return <FirstLastName setContent={setContent} />;
    } else {
      return <Recommended setContent={setContent} />;
    }
  };
  return (
    <div>
      <Container className={styles.container}>
        <div className="my-5">
          <h1 className={styles.heading}>
            Your #1 Source for
            <span className="mx-2">Branded and Generic Medication</span>
          </h1>
          <p className="text-secondary mt-3 fw-medium ">
            Your free online visit starts here. Tell us what we can help you
            with.
          </p>
          <div onClick={handleShow}>
            <SearchButton className="bg-primary" span="Find my treatment" />
          </div>
        </div>
      </Container>
      <section className={styles.cardSection}>
        <Container className={styles.container}>
          <CardSection handleShow={handleShow} />
          <ButtonSection />
        </Container>
      </section>
      <div className={styles.videoContainer}>
        <VideoPlayer src="/assets/home-vid.mp4" />
      </div>
      <div className={styles.explore}>
        <Explore handleShow={handleShow} />
      </div>
      <div>
        <Treatment handleShow={handleShow} />
      </div>
      <div>
        <Health handleShow={handleShow} />
      </div>
      <div>
        <Popular handleShow={handleShow} />
      </div>
      <div className={styles.service}>
        <Service />
      </div>
      <div style={{ background: "#F7F7F7" }}>
        <Frequently />
      </div>
      <Container className={styles.container}>
        <div className={`my-5 ${styles.lastSection}`}>
          <h1>
            <span>PureBlue </span>
            makes men’s health simpler, more convenient, and affordable.
          </h1>
          <div onClick={handleShow}>
            <SearchButton
              className="bg-dark"
              span="Explore treatments"
              name="not-explore"
            />
          </div>
        </div>
      </Container>
      <>
        <Modal
          show={show}
          dialogClassName={styles.modal}
          contentClassName={styles.modal}
          centered={true}
          onHide={handleClose}
        >
          <Modal.Header
            style={{ borderBottom: "0px" }}
            closeButton
          ></Modal.Header>
          <Modal.Body style={{ padding: "0px" }}>{chooseContent()}</Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default HomePage;

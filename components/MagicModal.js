import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import Link from "next/link";
import { searchParamsUrl } from "./searchParams";

export default function MagicModal({
  modalState,
  setModalState,
  handleSubmit,
  handleChange,
  formData,
  errorData,
}) {
  const rest = Object.entries(errorData);
  const returnValue = rest.map(([question, answer]) => {
    var message = answer;
    if (message == "Email Already taken, try to login") {
      message = (
        <div>
          {" "}
          <p>This email is already connected with an account!</p>
          <p>
            Try{" "}
            <Link
              style={{ fontWeight: "600", color: "#0077f0" }}
              href={"/login" + +searchParamsUrl()}
            >
              logging in
            </Link>{" "}
            using your password, or click{" "}
            <Link
              style={{ fontWeight: "600", color: "#0077f0" }}
              href={"/password-reset" + searchParamsUrl()}
            >
              forgot my password
            </Link>{" "}
            if you can't remember
          </p>
        </div>
      );
    }
    const inputField = (
      <input
        className="w-100"
        type={question === "password"}
        placeholder={`${question}`}
        onChange={handleChange}
        name={question}
      />
    );

    return { message, inputField };
  });

  return (
    <Modal show={modalState} onHide={() => setModalState(false)}>
      {/* <Modal.Header>
        <Modal.Title>Wrong unput!</Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <Form.Group>
          {returnValue.map((element) => {
            return (
              <div>
                <div className="pb-2">{element.message}</div>
                <div>{element.inputField}</div>
              </div>
            );
          })}
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModalState(false)}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleSubmit(formData);
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

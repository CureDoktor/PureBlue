import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function MagicModal({
  modalState,
  setModalState,
  handleSubmit,
  handleChange,
  formData,
  errorData,
}) {
  //console.log(errorData);
  const rest = Object.entries(errorData);
  var values = "";
  const returnValue = rest.map(([question, answer]) => {
    const message = answer;
    const inputField = (
      <input
        type="text"
        placeholder={`${question}`}
        onChange={handleChange}
        name={question}
      />
    );

    return { message, inputField };
  });

  return (
    <Modal show={modalState} onHide={() => setModalState(false)}>
      <Modal.Header>
        <Modal.Title>Magic Modal!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {returnValue.map((element) => {
          return (
            <div>
              {element.message} <br /> {element.inputField}
            </div>
          );
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModalState(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

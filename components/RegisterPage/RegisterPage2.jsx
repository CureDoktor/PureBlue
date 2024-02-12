import { useState, useEffect, useContext } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./RegisterPage2.styles.module.scss";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import Axios from "axios";
import StepSix from "./StepSix";
import { Form } from "react-bootstrap";
import AuthContext from "../../store/auth-context";
import { useRouter } from "next/router";
import MagicModal from "../MagicModal";

const RegisterPage2 = (props) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const [modalState, setModalState] = useState(false);
  const [progress, setProgress] = useState(20);
  const [states, setStates] = useState("");
  const [errorData, setErrorData] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    state: "",
    password: "",
    password_repeat: "",
    category: category ? category : 1,
  });
  const handleProgress = (e) => {
    e.preventDefault();
    if (progress === 20) {
      if (
        formData.firstName &&
        formData.firstName !== "" &&
        formData.lastName &&
        formData.lastName !== ""
      ) {
        const newProgress = progress + 20;
        setProgress(Math.min(newProgress, 100));
      } else {
        alert("Please fill out all required fields.");
      }
    } else if (progress === 40) {
      if (formData.state && formData.state !== "") {
        const newProgress = progress + 20;
        setProgress(Math.min(newProgress, 100));
      } else {
        alert("Please fill out all required fields.");
      }
    } else if (progress === 60) {
      if (formData.email && formData.email !== "") {
        const newProgress = progress + 20;
        setProgress(Math.min(newProgress, 100));
      } else {
        alert("Please fill out all required fields.");
      }
    } else if (progress === 80) {
      if (formData.phone && formData.phone !== "") {
        const newProgress = progress + 20;
        setProgress(Math.min(newProgress, 100));
      } else {
        alert("Please fill out all required fields.");
      }
    } else if (progress == 100) {
      if (
        formData.password &&
        formData.password != "" &&
        formData.password_repeat &&
        formData.password_repeat != ""
      ) {
        const newProgress = progress + 16.67;
        setProgress(Math.min(newProgress, 100));
      } else {
        alert("Please fill out all required fields.");
      }
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    setModalState(false);
    event.preventDefault();
    const route = "/api/auth/register";
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      password: formData.password,
      password_repeat: formData.password_repeat,
      category: 1,
    };
    if (formData.password === formData.password_repeat) {
      try {
        const rese = await Axios.post(route, payload)
          .then((res) => {
            props.props.isLoggedIn();
            authCtx.settingToken(res.data.data.access_token);
            router.push("/consultation");
          })
          .catch((error) => {
            console.log(error.response.data.errors);
            setErrorData(error.response.data.errors);
            setModalState(true);
          });
      } catch (err) {
        props.props.handleShow("Username or password are not good!" + err);
      }
    } else {
      props.props.handleShow("Passwords doesn't match!");
    }
    event.preventDefault();
  };

  const getStates = async () => {
    const route = "/api/states";
    try {
      const rese = await Axios.post(route)
        .then((res) => {
          setStates(res.data.data);
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  useEffect(() => {
    getStates();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.content}>
        <div className={styles.progressBarContainer}>
          <div
            className={`${styles.progressBar} ${
              progress === 100 && styles.completed
            }`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className={styles.txtContainer}>
            {progress == 20 && (
              <StepOne formData={formData} handleChange={handleChange} />
            )}
            {progress == 40 && (
              <StepThree
                states={states}
                formData={formData}
                handleChange={handleChange}
              />
            )}
            {progress == 60 && (
              <StepFour formData={formData} handleChange={handleChange} />
            )}
            {progress == 80 && (
              <StepFive formData={formData} handleChange={handleChange} />
            )}
            {progress == 100 && (
              <StepSix formData={formData} handleChange={handleChange} />
            )}

            {progress == 100 ? (
              <div className={styles.btnContainer}>
                <button onClick={handleSubmit}>
                  Submit
                  <img src="/assets/right-arrow.png" alt="" />
                </button>
              </div>
            ) : (
              <div className={styles.btnContainer}>
                <button onClick={handleProgress}>
                  Continue
                  <img src="/assets/right-arrow.png" alt="" />
                </button>
              </div>
            )}
          </div>
          <MagicModal
            formData={formData}
            modalState={modalState}
            handleChange={handleChange}
            setModalState={setModalState}
            handleSubmit={handleSubmit}
            errorData={errorData}
          />
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage2;

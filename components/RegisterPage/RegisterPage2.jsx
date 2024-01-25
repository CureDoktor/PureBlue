import { useState, useEffect, useContext } from "react";
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

const RegisterPage2 = (props) => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();

  const [progress, setProgress] = useState(16.67);
  const handleProgress = (e) => {
    e.preventDefault();
    const newProgress = progress + 16.67;
    setProgress(Math.min(newProgress, 100));
  };
  const [states, setStates] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    password_repeat: "",
    category: 1,
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
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
            console.log(res.data);
            authCtx.settingToken(res.data.data.access_token);
            router.push("/visit-form");
          })
          .catch((error) => {
            props.props.handleShow(error.response.data);
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
      <section className={styles.content}>
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
            {progress >= 0 && progress <= 16.67 && (
              <StepOne formData={formData} handleChange={handleChange} />
            )}
            {progress > 16.67 && progress <= 33.34 && (
              <StepTwo formData={formData} handleChange={handleChange} />
            )}
            {progress > 33.34 && progress <= 50.01005 && (
              <StepThree
                states={states}
                formData={formData}
                handleChange={handleChange}
              />
            )}
            {progress > 50.01005 && progress <= 66.68 && (
              <StepFour formData={formData} handleChange={handleChange} />
            )}
            {progress > 66.68 && progress <= 83.35001 && (
              <StepFive formData={formData} handleChange={handleChange} />
            )}
            {progress > 83.35001 && (
              <StepSix formData={formData} handleChange={handleChange} />
            )}

            {progress > 83.35001 ? (
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
        </Form>
      </section>
    </div>
  );
};

export default RegisterPage2;

import { useState, useEffect, useContext } from "react";
import styles from "./Questions.styles.module.scss";
import Axios from "axios";
import QuestionEight from "../QuestionEight/QuestionEight";
import QuestionNine from "../QuestionNine";
import QuestionTen from "../QuestionTen";
import QuestionEleven from "../QuestionEleven";
import QuestionTwelve from "../QuestionTwelve";
import QuestionThirteen from "../QuestionThirteen/QuestionThirteen";
import QuestionFourteen from "../QuestionFourteen/QuestionFourteen";
import QuestionFifteen from "../QuestionFifteen";
import QuestionSixteen from "../QuestionSixteen";
import AuthContext from "../../../store/auth-context";
import MagicModal from "../../MagicModal";
import { useRouter } from "next/navigation";

const Questions = (props) => {
  const authCtx = useContext(AuthContext);
  const [modalState, setModalState] = useState(false);
  const [errorData, setErrorData] = useState("");
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    password_repeat: "",
    product_id: 1,
    date_of_birth: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitForm = (values) => {
    try {
      let updatedForm = { ...form }; // Create a copy of the current form state
      for (const property in values) {
        updatedForm = {
          ...updatedForm,
          [property]: values[property],
        };
      }
      handleRegistration(updatedForm).then(setForm(updatedForm));
    } catch (error) {
      console.log(error);
    }
    //setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleRegistration = async (formData) => {
    const route = "/api/auth/register";
    const headers = {
      "Content-Type": "application/json",
      scenario: "?scenario=dob", // Custom header with data
    };

    if (formData.password === formData.password_repeat) {
      try {
        const rese = await Axios.post(route, formData, { headers })
          .then((res) => {
            props.props.isLoggedIn();
            authCtx.setCaseId(res.data.lastCase.case_id);
            authCtx.settingToken(res.data.access_token);
            router.push("/medical-profile-questions");
          })
          .catch((error) => {
            setErrorData(error.response.data);
            setModalState(true);
          });
      } catch (err) {
        props.props.handleShow("Username or password are not good!" + err);
      }
    } else {
      props.props.handleShow("Passwords doesn't match!");
    }
  };

  const [currentStep, setCurrentStep] = useState(() => {
    if (typeof window !== "undefined") {
      const savedStep = localStorage.getItem("currentStep");
      return savedStep ? parseInt(savedStep, 10) : 1;
    }
    return 1;
  });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    if (typeof window !== "undefined") {
      const savedStep = localStorage.getItem("currentStep");
      if (savedStep) {
        setCurrentStep(parseInt(savedStep, 10));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currentStep", currentStep);
    }
  }, [currentStep]);

  const goToNextStep = (values) => {
    for (const property in values) {
      setForm({
        ...form,
        [property]: values[property],
      });
    }

    setCurrentStep((prevStep) => prevStep + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <QuestionEight
            onNext={() => {
              setCurrentStep((prevStep) => prevStep + 1);
            }}
          />
        );
      case 2:
        return (
          <QuestionNine
            onNext={() => {
              setCurrentStep((prevStep) => prevStep + 1);
            }}
          />
        );
      case 3:
        return (
          <QuestionTen
            onNext={() => {
              setCurrentStep((prevStep) => prevStep + 1);
            }}
          />
        );
      case 4:
        return (
          <QuestionEleven
            onNext={() => {
              setCurrentStep((prevStep) => prevStep + 1);
            }}
          />
        );
      case 5:
        return (
          <QuestionTwelve
            onNext={() => {
              setCurrentStep((prevStep) => prevStep + 1);
            }}
          />
        );
      case 6:
        return (
          <QuestionThirteen
            onNext={() => {
              setCurrentStep((prevStep) => prevStep + 1);
            }}
          />
        );
      case 7:
        return <QuestionFourteen onNext={goToNextStep} />;
      case 8:
        return <QuestionFifteen onNext={goToNextStep} />;
      case 9:
        return (
          <QuestionSixteen submitForm={submitForm} onNext={goToNextStep} />
        );
      default:
        return <div>Process Completed</div>;
    }
  };

  if (!hasMounted) {
    return null;
  }
  return (
    <div className={styles.mainContainer}>
      {renderStep()}
      <MagicModal
        formData={form}
        modalState={modalState}
        handleChange={handleChange}
        setModalState={setModalState}
        handleSubmit={handleRegistration}
        errorData={errorData}
      />
    </div>
  );
};

export default Questions;

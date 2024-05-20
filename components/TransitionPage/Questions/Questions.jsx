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
import { useRouter } from "next/router";
import { searchParamsUrl } from "../../searchParams";

const Questions = (props) => {
  const authCtx = useContext(AuthContext);
  const [modalState, setModalState] = useState(false);
  const [preferredState, setPreferredState] = useState("your state");
  const [errorData, setErrorData] = useState("");
  const router = useRouter();
  const questionId = parseInt(router.query?.question) || 1;
  const [showFill, setShowFill] = useState(false);
  const [fill, setFill] = useState(5);

  // console.log(questionId + " /questions/?&question=1");

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

  const calculateFill = () => {
    if (currentStep == 2) {
      setShowFill(true);
      setFill(33);
    } else if (currentStep == 3) {
      setShowFill(true);
      setFill(66);
    } else if (currentStep == 5) {
      setShowFill(true);
      setFill(98);
    } else {
      setShowFill(false);
    }
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
            router.push("/medical-profile-questions" + searchParamsUrl());
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
      const savedStep = parseInt(questionId);
      return savedStep ? parseInt(savedStep, 10) : 1;
    }
    return 1;
  });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url) => {
      const params = new URLSearchParams(url.split("?")[1]);
      const newQuestionId = parseInt(params.get("question")) || 1;
      setCurrentStep(newQuestionId);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    setHasMounted(true);
    if (typeof window !== "undefined") {
      console.log(questionId);
      setCurrentStep(questionId);
    }
    console.log(questionId);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currentStep", questionId);
    }
    calculateFill();
  }, [currentStep]);

  const goToNextStep = (values) => {
    for (const property in values) {
      setForm({
        ...form,
        [property]: values[property],
      });
    }

    setCurrentStep(currentStep + 1);
    router.push(
      "/questions/?&question=" + (currentStep + 1) + searchParamsUrl()
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <QuestionEight
            onNext={() => {
              setCurrentStep(currentStep + 1);
              router.push(
                "/questions/?&question=" + (currentStep + 1) + searchParamsUrl()
              );
            }}
          />
        );
      case 2:
        return (
          <QuestionNine
            onNext={() => {
              setCurrentStep(currentStep + 1);
              router.push(
                "/questions/?&question=" + (currentStep + 1) + searchParamsUrl()
              );
            }}
          />
        );
      case 3:
        return (
          <QuestionTen
            onNext={() => {
              setCurrentStep(currentStep + 1);
              router.push(
                "/questions/?&question=" + (currentStep + 1) + searchParamsUrl()
              );
            }}
          />
        );
      case 4:
        return (
          <QuestionEleven
            onNext={() => {
              setCurrentStep(currentStep + 1);
              router.push(
                "/questions/?&question=" + (currentStep + 1) + searchParamsUrl()
              );
            }}
          />
        );
      case 5:
        return (
          <QuestionTwelve
            onNext={() => {
              setCurrentStep(currentStep + 1);
              router.push(
                "/questions/?&question=" + (currentStep + 1) + searchParamsUrl()
              );
            }}
          />
        );
      case 6:
        return (
          <QuestionThirteen
            preferredState={preferredState}
            setPreferredState={setPreferredState}
            onNext={() => {
              setCurrentStep(currentStep + 1);
              router.push(
                "/questions/?&question=" + (currentStep + 1) + searchParamsUrl()
              );
            }}
          />
        );
      case 7:
        return (
          <QuestionFourteen
            preferredState={preferredState}
            onNext={goToNextStep}
          />
        );
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

      <div
        className={styles.widthContainer}
        style={showFill ? { opacity: "100" } : { opacity: "0" }}
      >
        <div
          className={styles.blueFill}
          style={{
            width: `${fill}%`,
          }}
        ></div>
      </div>
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

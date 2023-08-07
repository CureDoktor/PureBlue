import { useState, createContext, useContext } from "react";

export const ConsultationContext = createContext();

export default function ConsultationContextProvider({ children }) {
  const [data, setData] = useState({});
  const [questions, setQuestions] = useState({});

  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <ConsultationContext.Provider
      value={{ data, setFormValues, questions, setQuestions }}
    >
      {children}
    </ConsultationContext.Provider>
  );
}

export const useConsultationContext = () => useContext(ConsultationContext);

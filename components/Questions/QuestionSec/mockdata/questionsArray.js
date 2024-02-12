import {
  btnSixArr,
  btnSixArr2,
  optionsArr,
  optionsArr2,
  optionsArr3,
  btnSixArr3,
  btnSixArr4,
  btnSixArr5,
  btnSixArr6,
  btnSixArr7,
  btnSixArr8,
} from "./options";

export const questions = [
  {
    id: 0,
    question: {
      title: "Birthday",
      alert: "ID verified after checkout",
      label: "MM-DD-YYYY",
      type: "input",
    },
  },
  {
    id: 1,
    question: {
      question:
        "Are you seeking treatment to help obtain or maintain an erection?",
      options: optionsArr3,
      type: "row",
    },
  },
  {
    id: 2,
    question: {
      question: "How concerned are you about this problem?",
      options: optionsArr,

      type: "column",
    },
  },
  {
    id: 3,
    question: {
      question: "How concerned are you about this problem?",
      options: optionsArr2,
      type: "column",
    },
  },
  {
    id: 4,
    question: {
      question:
        "Have you had your vitals tested by a medical practitioner in the past 3 years? This includes weight, blood pressure, and heart rate.",
      options: optionsArr3,
      type: "row",
    },
  },
  {
    id: 5,
    question: {
      question: "Do you have any of the following HIGH RISK criteria:",
      options: btnSixArr,
      type: "multiple",
    },
  },
  {
    id: 6,
    question: {
      question: "How concerned are you about this problem?",
      options: btnSixArr2,
      type: "multiple",
    },
  },
  {
    id: 7,
    question: {
      question: "Do you have any of the following HIGH RISK criteria:",
      options: btnSixArr3,
      type: "multiple",
    },
  },
  {
    id: 8,
    question: {
      question:
        "What is your blood pressure on an average day (even when taking medication)?",
      options: btnSixArr4,
      type: "multiple",
    },
  },
  {
    id: 9,
    question: {
      question:
        "Within the past 6 months, have you had a heart attack or cardiac surgery?",
      options: optionsArr3,

      type: "row",
    },
  },
  {
    id: 10,
    question: {
      question:
        "Have you ever had any physical abnormalities with your genitals?",
      options: btnSixArr5,
      type: "multiple",
    },
  },
  {
    id: 11,
    question: {
      question: "Do you have any of the following?",
      options: btnSixArr6,
      type: "multiple",
    },
  },
  {
    id: 12,
    question: {
      question:
        "Have you done any of the following recreational drugs in the past 3 months? Please note: death can result if ED meds are used in conjunction with recreational drugs.",
      options: btnSixArr7,
      type: "multiple",
    },
  },
  {
    id: 13,
    question: {
      question: `Do you take any of the following medications? Please note: death can result if ED medications are used in conjunction with nitrates (often prescribed for chest pain/angina) or other medications. Please be accurate.`,
      options: btnSixArr8,
      type: "multiple",
    },
  },
  {
    id: 14,
    question: {
      question:
        "Please list ALL prescription medications you are taking or are currently prescribed. Include all over the counter medications, vitamins, minerals, or supplements:",
      options: [{ id: 1, option: "If none, click here" }],
      type: "textArea",
      value: "",
    },
  },
  {
    id: 15,
    question: {
      question:
        "Please list all allergies to medications, dyes, or anything else. If none, write “NONE”",
      options: [{ id: 1, option: "If none, click here", value: "" }],
      type: "textArea",
    },
  },
  {
    id: 16,
    question: {
      question:
        "Are you seeking treatment to help obtain or maintain an erection?",
      options: optionsArr3,
      type: "row",
    },
  },
  {
    id: 17,
    question: {
      question:
        "Is there anything else you would like us to know? Please include any questions, comments, or concerns.",
      options: [{ id: 1, option: "If none, click here", value: "" }],
      type: "textAreaTwo",
    },
  },
];

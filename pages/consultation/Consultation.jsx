import Head from "next/head";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Consultation.styles.module.scss";
import Start from "../../components/Consultation/Start";
import Button from "../../components/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { useConsultationContext } from "../../store/consultation-context";
import QuestionParser from "../../components/Consultation/QuestionParser";
import Form from "../../components/Form";
import { useForm } from "react-hook-form";

const mockQuestions = [
  {
    id: 1,
    name: "input1",
    type: "radio",
    values: ["Input 1", "Input 2"],
  },
  {
    id: 2,
    name: "input2",
    type: "radio",
    values: ["Input 3", "Input 4", "Input 5"],
  },
];

const newMockQuestions = [
  {
    id: 1,
    questionnaire_id: 1,
    title: "Are you seeking treatment to help obtain or maintain an erection?",
    type: "radio",
    visibility: 1,
    question_order: 1,
    rules:
      "required|['requiredValue' => 1,\r\n                 'message'       => 'At this time we only treat male patients looking to improve their sexual performance.']",
    questionsAnswers: [
      {
        id: 1,
        question_id: 1,
        title: "Yes",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 2,
        question_id: 1,
        title: "No",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
    ],
  },
  {
    id: 2,
    questionnaire_id: 1,
    title: "How concerned are you about this problem?",
    type: "radio",
    visibility: 1,
    question_order: 2,
    rules: "",
    questionsAnswers: [
      {
        id: 3,
        question_id: 2,
        title: "Very",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 4,
        question_id: 2,
        title: "Somewhat",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 5,
        question_id: 2,
        title: "Not at all",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
    ],
  },
  {
    id: 3,
    questionnaire_id: 1,
    title: "How long have you been experiencing your symptoms?",
    type: "radio",
    visibility: 1,
    question_order: 3,
    rules: "",
    questionsAnswers: [
      {
        id: 6,
        question_id: 3,
        title: "0-6 months",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 7,
        question_id: 3,
        title: "6-12 months",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 8,
        question_id: 3,
        title: "More than 1 year",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
    ],
  },
  {
    id: 4,
    questionnaire_id: 1,
    title:
      "Have you had your vitals tested by a medical practitioner in the past 3 years? This includes weight, blood pressure, and heart rate.",
    type: "radio",
    visibility: 1,
    question_order: 4,
    rules: "",
    questionsAnswers: [
      {
        id: 9,
        question_id: 4,
        title: "Yes",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 10,
        question_id: 4,
        title: "No",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
    ],
  },
  {
    id: 5,
    questionnaire_id: 1,
    title: "Which medications/devices for erectile dysfunction in the past?",
    type: "checkbox",
    visibility: 1,
    question_order: 5,
    rules: "",
    questionsAnswers: [
      {
        id: 11,
        question_id: 5,
        title: "Sildenafil/Viagra",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 12,
        question_id: 5,
        title: "Tadalafil/Cialis",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 13,
        question_id: 5,
        title: "Levitra",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 14,
        question_id: 5,
        title: "Mechanical Device (Vacuum Pump/Implants)",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 15,
        question_id: 5,
        title: "Other",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 16,
        question_id: 5,
        title: "NONE of the above",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 1,
      },
      {
        id: 17,
        question_id: 5,
        title: "The medication/device DID NOT help",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 18,
        question_id: 5,
        title: "The medication/device helped SOMEWHAT",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 19,
        question_id: 5,
        title: "The medication/device WAS NOT helpful",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
    ],
  },
  {
    id: 6,
    questionnaire_id: 1,
    title: "Does any of the following apply to you?",
    type: "checkbox",
    visibility: 1,
    question_order: 6,
    rules: "",
    questionsAnswers: [
      {
        id: 20,
        question_id: 6,
        title: "I have been told that I am not healthy enough to have sex.",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 21,
        question_id: 6,
        title:
          "Within the last year I have experienced chest pain AND/OR significant shortness of breath while undergoing exercise.",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 22,
        question_id: 6,
        title: "I have experienced unexplained blurry vision or headaches.",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 23,
        question_id: 6,
        title:
          "I am unable to walk 1 mile on a flat surface within 20 minutes.",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 24,
        question_id: 6,
        title: "I have been diagnosed with “low blood pressure.”",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 25,
        question_id: 6,
        title: "None",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 1,
      },
    ],
  },
  {
    id: 7,
    questionnaire_id: 1,
    title: "Do you have any of the following HIGH RISK criteria:",
    type: "checkbox",
    visibility: 1,
    question_order: 7,
    rules: "",
    questionsAnswers: [
      {
        id: 26,
        question_id: 7,
        title: "Retinitis pigmentosa or anterior ischemic optic neuropathy",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 27,
        question_id: 7,
        title:
          "Severe aortic stenosis OR Hypertrophic obstructive cardiomyopathy (HOCM)",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 28,
        question_id: 7,
        title: "Pulmonary Hypertension",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 29,
        question_id: 7,
        title: "Sickle cell anemia, myeloma, or leukemia",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 30,
        question_id: 7,
        title:
          "Multiple sclerosis (MS) or similar disease, spinal injuries or paralysis",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 31,
        question_id: 7,
        title: "NONE of the above",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 1,
      },
    ],
  },
  {
    id: 8,
    questionnaire_id: 1,
    title:
      "What is your blood pressure on an average day (even when taking medication)? ",
    type: "radio",
    visibility: 1,
    question_order: 8,
    rules: "",
    questionsAnswers: [
      {
        id: 32,
        question_id: 8,
        title: "Normal (110-120mmHg/70-80mmHg)",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 33,
        question_id: 8,
        title: "Mildly Elevated (121-130mmHg/80-90mmHg)",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 34,
        question_id: 8,
        title: "Elevated (141-160mmHg/90-100mmHg))",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 35,
        question_id: 8,
        title: "Severe elevation (>160mmHg/110mmHg)",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 36,
        question_id: 8,
        title: "Mildly low (100-110mmHg/65-70mmHg)",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 37,
        question_id: 8,
        title: "Very low (<95mmHg/<65mmHg)",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
    ],
  },
  {
    id: 9,
    questionnaire_id: 1,
    title:
      "Within the past 6 months, have you had a heart attack or cardiac surgery?\r\n",
    type: "radio",
    visibility: 1,
    question_order: 9,
    rules: "",
    questionsAnswers: [
      {
        id: 38,
        question_id: 9,
        title: "Yes",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: 18,
        reset_others: 0,
      },
      {
        id: 39,
        question_id: 9,
        title: "No",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
    ],
  },
  {
    id: 18,
    questionnaire_id: 1,
    title:
      "Within the past 6 months, have you had a heart attack or cardiac surgery? (Please provide additional details)",
    type: "textarea",
    visibility: 0,
    question_order: 10,
    rules:
      "required|['when' => function($model){\r\nreturn  $model->q9 == '38';},\r\n'whenClient' =>  \"function(attribute, value){\r\nreturn $('[name=\\\"QuestionsForm[q9]\\\"]:checked').val() == '38';\r\n}\"]",
    questionsAnswers: [],
  },
  {
    id: 10,
    questionnaire_id: 1,
    title: "Have you ever had any physical abnormalities with your genitals?",
    type: "checkbox",
    visibility: 1,
    question_order: 11,
    rules: "",
    questionsAnswers: [
      {
        id: 40,
        question_id: 10,
        title:
          "Previous priapism (erection lasting longer than 4 hours requiring medical treatment)",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 41,
        question_id: 10,
        title: "Peyronie's Disease",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 42,
        question_id: 10,
        title: "Significant bend in penis which IS painful upon erection",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 43,
        question_id: 10,
        title:
          "Genital surgery (not including infant circumcision)/Pelvic trauma",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 44,
        question_id: 10,
        title: "I have NOT had any of the above",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 1,
      },
    ],
  },
  {
    id: 11,
    questionnaire_id: 1,
    title: "Do you have any of the following?",
    type: "checkbox",
    visibility: 1,
    question_order: 12,
    rules: "",
    questionsAnswers: [
      {
        id: 45,
        question_id: 11,
        title: "History of kidney failure/kidney disease",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: 19,
        reset_others: 0,
      },
      {
        id: 46,
        question_id: 11,
        title: "Have seen a kidney specialist (nephrologist)",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: 22,
        reset_others: 0,
      },
      {
        id: 47,
        question_id: 11,
        title: "Severe kidney disease (stage 3 or ESRD or CrCl < 35)",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 48,
        question_id: 11,
        title: "Previously or currently on dialysis",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 49,
        question_id: 11,
        title: "History of kidney transplant",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 50,
        question_id: 11,
        title: "None of the above",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 1,
      },
    ],
  },
  {
    id: 19,
    questionnaire_id: 1,
    title:
      "Do you have any lab tests within the past 6 months that include your Creatinine, CrCl, or GFR that you are able to share?",
    type: "radio",
    visibility: 0,
    question_order: 13,
    rules:
      "required|['when' => function($model){\r\nreturn in_array('45', $model->q11, true);},\r\n'whenClient' =>  \"function(attribute, value){\r\nreturn $('[name=\\\"QuestionsForm[q11][]\\\"][value=\\\"45\\\"]').is(':checked');\r\n}\"]",
    questionsAnswers: [
      {
        id: 64,
        question_id: 19,
        title: "Yes",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: 20,
        reset_others: 0,
      },
      {
        id: 65,
        question_id: 19,
        title: "No",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: 21,
        reset_others: 0,
      },
    ],
  },
  {
    id: 20,
    questionnaire_id: 1,
    title:
      "Do you have any lab tests within the past 6 months that include your Creatinine, CrCl, or GFR that you are able to share? (Please Upload)",
    type: "upload",
    visibility: 0,
    question_order: 14,
    rules: "",
    questionsAnswers: [],
  },
  {
    id: 21,
    questionnaire_id: 1,
    title:
      "Do you have any lab tests within the past 6 months that include your Creatinine, CrCl, or GFR that you are able to share? (Please provide details from your most recent lab test)\r\n",
    type: "textarea",
    visibility: 0,
    question_order: 15,
    rules:
      "required|['when' => function($model){\r\nreturn $model->q19 == '65';},\r\n'whenClient' =>  \"function(attribute, value){\r\nreturn $('[name=\\\"QuestionsForm[q19]\\\"]:checked').val() == '65';\r\n}\"]",
    questionsAnswers: [],
  },
  {
    id: 22,
    questionnaire_id: 1,
    title:
      "Have seen a kidney specialist (nephrologist)? (Please provide additional details of the visit)\r\n",
    type: "textarea",
    visibility: 0,
    question_order: 16,
    rules:
      "required|['when' => function($model){\r\nreturn in_array('46', $model->q11, true);},\r\n'whenClient' =>  \"function(attribute, value){\r\nreturn $('[name=\\\"QuestionsForm[q11][]\\\"][value=\\\"46\\\"]').is(':checked');\r\n}\"]",
    questionsAnswers: [],
  },
  {
    id: 12,
    questionnaire_id: 1,
    title:
      "Have you done any of the following recreational drugs in the past 3 months? Please note: death can result if ED meds are used in conjunction with recreational drugs.",
    type: "checkbox",
    visibility: 1,
    question_order: 17,
    rules: "",
    questionsAnswers: [
      {
        id: 51,
        question_id: 12,
        title: "Poppers or Rush (Amyl Nitrate or Butyl Nitrate)",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 52,
        question_id: 12,
        title: "Cocaine",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 53,
        question_id: 12,
        title: "Methamphetamine (crystal meth)",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 54,
        question_id: 12,
        title: "NONE of the above",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 1,
      },
    ],
  },
  {
    id: 13,
    questionnaire_id: 1,
    title:
      "Do you take any of the following medications? Please note: death can result if ED medications are used in conjunction with nitrates (often prescribed for chest pain/angina) or other medications. Please be accurate.",
    type: "checkbox",
    visibility: 1,
    question_order: 18,
    rules: "",
    questionsAnswers: [
      {
        id: 55,
        question_id: 13,
        title:
          "Any nitrates (Ex: isosorbide dinitrate, isosorbide mononitrate, Nitrostat, nitroglycerine)",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 56,
        question_id: 13,
        title:
          "Adempas (Riociquat), which is used to treat pulmonary hypertension.",
        is_important: 0,
        is_critical: 1,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 57,
        question_id: 13,
        title:
          "Alpha blockers (ex: alfuzolin, terazosin, doxazosin, tamsulosin)",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 58,
        question_id: 13,
        title: "Cimetidine, erythromycin, OR digitoxin",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 59,
        question_id: 13,
        title: "Ketoconazole/itraconazole (oral only. NOT topical)",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 60,
        question_id: 13,
        title: "Ritonavir or Saquinavir",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 61,
        question_id: 13,
        title: "NONE of the above",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 1,
      },
    ],
  },
  {
    id: 14,
    questionnaire_id: 1,
    title:
      "Please list ALL prescription medications you are taking or are currently prescribed.  Include all over the counter medications, vitamins, minerals, or supplements:",
    type: "textarea",
    visibility: 1,
    question_order: 19,
    rules: "",
    questionsAnswers: [],
  },
  {
    id: 15,
    questionnaire_id: 1,
    title:
      "Please list all allergies to medications, dyes, or anything else. If none, write “NONE”\r\n",
    type: "textarea",
    visibility: 1,
    question_order: 20,
    rules: "",
    questionsAnswers: [],
  },
  {
    id: 16,
    questionnaire_id: 1,
    title: "Did you understand all the questions which were asked?",
    type: "radio",
    visibility: 1,
    question_order: 21,
    rules: "",
    questionsAnswers: [
      {
        id: 62,
        question_id: 16,
        title: "Yes",
        is_important: 0,
        is_critical: 0,
        critical_message: "",
        follow_up_question: null,
        reset_others: 0,
      },
      {
        id: 63,
        question_id: 16,
        title: "No",
        is_important: 1,
        is_critical: 0,
        critical_message: "",
        follow_up_question: 23,
        reset_others: 0,
      },
    ],
  },
  {
    id: 23,
    questionnaire_id: 1,
    title: "Which question did you not understand?\r\n",
    type: "textarea",
    visibility: 0,
    question_order: 22,
    rules:
      "required|['when' => function($model){\r\nreturn $model->q16 == '63';},\r\n'whenClient' =>  \"function(attribute, value){\r\nreturn $('[name=\\\"QuestionsForm[16]\\\"]:checked').val() == '63';\r\n}\"]",
    questionsAnswers: [],
  },
  {
    id: 17,
    questionnaire_id: 1,
    title:
      "Is there anything else you would like us to know? Please include any questions, comments, or concerns.",
    type: "textarea",
    visibility: 1,
    question_order: 23,
    rules: "",
    questionsAnswers: [],
  },
];

const Consultation = () => {
  const router = useRouter();
  const { reset } = useForm();
  const { query } = router;
  const { setQuestions, questions, setFormValues, data } =
    useConsultationContext() || {};
  const { total: totalQuestions } = questions;
  const question = query?.question ? parseInt(query?.question) : 0;
  const notLastQuestion = question !== totalQuestions;

  useEffect(() => {
    const questions = newMockQuestions.filter((q) => q.visibility === 1);
    const followUpQuestions = newMockQuestions.filter(
      (q) => q.visibility !== 1
    );

    const questionMap = {};

    followUpQuestions.forEach((question) => {
      questionMap[question.id] = question;
    });

    setQuestions({
      main: questions,
      questionMap,
      total: questions.length,
    });
  }, []);

  const handleSubmit = (values) => {
    console.log(values);
    setFormValues(values);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Pure Blue - Consultation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Form defaultValues={data} onSubmit={handleSubmit}>
            <Row className={styles.row}>
              <Col className={styles.col} xs={12} lg={7}>
                {!question ? <Start /> : <QuestionParser />}
                <Button
                  type={question ? "submit" : "button"}
                  onClick={() =>
                    router.push(
                      `/consultation?question=${question + 1}`,
                      undefined,
                      {
                        shallow: true,
                      }
                    )
                  }
                  endAdornment={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                >
                  {notLastQuestion ? "Next question" : "Submit"}
                </Button>
                {!query?.question && (
                  <div className={styles.footer}>
                    <p className={styles.help}>
                      Need help? <Link href="#">Live chat with us</Link>
                    </p>
                    <p className={styles.disclaimer}>
                      *If your treatment isn't approved by our medical experts,
                      we'll cancel your order and you won't be charged.
                    </p>
                  </div>
                )}
              </Col>
            </Row>
          </Form>
        </Container>
      </main>
    </div>
  );
};

export default Consultation;

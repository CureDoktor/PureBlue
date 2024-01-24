import React, { useState } from "react";
import styles from "./styles.module.scss";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionSix from "./QuestionSix";
const QuestionSec = () => {
  const btnSixArr = [
    { id: 1, btn: "Sildenafil/Viagra" },
    { id: 2, btn: "Tadalafil/Cialis" },
    { id: 3, btn: "Levitra" },
    { id: 4, btn: "Mechanical Device (Vaccum Pump/Implants" },
    { id: 5, btn: "Other" },
    { id: 6, btn: "None of the above" },
    { id: 7, btn: "The medication/device DID not help" },
    { id: 8, btn: "The medication/device helped SOMEWHAT" },
    { id: 9, btn: "The medication/device WAS NOT helpful" },
  ];
  const btnSixArr2 = [
    { id: 1, btn: "I have been told the I am not healthy enough to have sex" },
    {
      id: 2,
      btn: "Within the last year I have experienced chest pain AND/OR significant shortness of breath while undergoing exercise.",
    },
    {
      id: 3,
      btn: "I have experienced unexplained blurry vision or headaches.",
    },
    {
      id: 4,
      btn: "I am unable to walk 1 mile on a flat surface within 20 minutes.",
    },
    { id: 5, btn: `I have been diagnosed with "low blood pressure."` },
    { id: 6, btn: "None" },
  ];
  const btnSixArr3 = [
    {
      id: 1,
      btn: "Retinitis pigmentosa or anterior ischemic optic neuropathy",
    },
    {
      id: 2,
      btn: "Severe aortic stenosis OR Hypertrophic obstructive cardiomyopathy (HOCM)",
    },
    { id: 3, btn: "Pulmonary Hypertension" },
    { id: 4, btn: "Sickle cell anemia, myeloma, or leukemia" },
    {
      id: 5,
      btn: `Multiple sclerosis (MS) or similar disease, spinal injuries or paralysis`,
    },
    { id: 6, btn: "None of the above" },
  ];
  const btnSixArr4 = [
    { id: 1, btn: "Normal (110-120mmHg/70-80mmHg)" },
    { id: 2, btn: "Mildly Elevated (121-130mmHg/80-90mmHg)" },
    { id: 3, btn: "Elevated (141-160mmHg/90-100mmHg)" },
    { id: 4, btn: "Severe elevation (>160mmHg/110mmHg)" },
    { id: 5, btn: `Mildly low (100-110mmHg/65-70mmHg)` },
    { id: 6, btn: "Very low (<95mmHg/<65mmHg)" },
  ];

  const btnSixArr5 = [
    {
      id: 1,
      btn: "Previous priapism (erection lasting longer than 4 hours requiring medical treatment)",
    },
    { id: 2, btn: "Peyronie's Disease" },
    { id: 3, btn: "Significant bend in penis which IS painful upon erection" },
    {
      id: 4,
      btn: "Genital surgery (not including infant circumcision)/Pelvic trauma",
    },
    { id: 5, btn: `I have NOT had any of the above` },
  ];
  const btnSixArr6 = [
    { id: 1, btn: "History of kidney failure/kidney disease" },
    { id: 2, btn: "Have seen a kidney specialist (nephrologist)" },
    { id: 3, btn: "Severe kidney disease (stage 3 or ESRD or CrCl < 35)" },
    { id: 4, btn: "Previously or currently transplant" },
    { id: 5, btn: `None of the above` },
  ];

  const btnSixArr7 = [
    { id: 1, btn: "Poppers or Rush (Amyl Nitrate or Butyl Nitrate)" },
    { id: 2, btn: "Cocaine" },
    { id: 3, btn: "Methamphetamine (crystal meth)" },
    { id: 4, btn: `None of the above` },
  ];
  const btnSixArr8 = [
    {
      id: 1,
      btn: "Any nitrates (Ex: isosorbie dinitrate, isosorbi mononitrate, Nitrostat, nitroglycerine)",
    },
    {
      id: 2,
      btn: "Adempas (Riociquat), which is used to treat pulmonary hypertension.",
    },
    {
      id: 3,
      btn: "Alpha blockers (ex: alfuzolin, terazosin, doxazosin, tamsulosin)",
    },
    { id: 4, btn: `Cimetidine, erythromycin, OR digitoxin)` },
    { id: 5, btn: `Ketoconazole/itraconazole (oral only. NOT topical)` },
    { id: 6, btn: `Ritonavir or Saquinavir` },
    { id: 7, btn: `None of the above` },
  ];
  return (
    <div className={styles.mainContainer}>
      <QuestionOne />
      <QuestionTwo para="Are you seeking treatment to help obtain or maintain an erection?" />
      <QuestionThree
        para="How concerned are you about this problem?"
        btn1="Very"
        btn2="Somewhat"
        btn3="Not at all"
      />
      <QuestionThree
        para="How concerned are you about this problem?"
        btn1="0-6 months"
        btn2="6-12 months"
        btn3="More than 1 year"
      />
      <QuestionTwo
        para="Have you had your vitals tested by a medical practitioner in the past 3 years? This includes weight, 
        blood pressure, and heart rate."
      />
      <QuestionSix
        para="Do you have any of the following HIGH RISK criteria:"
        btnArray={btnSixArr}
      />
      <QuestionSix
        para="How concerned are you about this problem?"
        btnArray={btnSixArr2}
      />
      {/* step 8  */}
      <QuestionSix
        para="Do you have any of the following HIGH RISK criteria:"
        btnArray={btnSixArr3}
      />
      {/* step 9  */}
      <QuestionSix
        para="What is your blood pressure on an average day (even when taking medication)?"
        btnArray={btnSixArr4}
      />
      {/* step 10  */}
      <QuestionTwo para="Within the past 6 months, have you had a heart attack or cardiac surgery?" />

      {/* step 11  */}
      <QuestionSix
        para="Have you ever had any physical abnormalities with your genitals?"
        btnArray={btnSixArr5}
      />
      {/* step 12  */}
      <QuestionSix
        para="Do you have any of the following?"
        btnArray={btnSixArr6}
      />
      {/* step 13  */}
      <QuestionSix
        para="Have you done any of the following recreational drugs in the past 3 months? Please note: death can result if ED meds are used in conjunction with recreational drugs."
        btnArray={btnSixArr7}
      />
      {/* step 14  */}
      <QuestionSix
        para={`Do you take any of the following medications?
         Please note: death can result if ED medications are used in conjunction with nitrates (often prescribed for chest pain/angina) or other medications. Please be accurate.`}
        btnArray={btnSixArr8}
      />
      <div className={styles.btnContainer}>
        <button>
          <img src="/assets/questions/backArrow.png" alt="back" />
          <span>Back</span>
        </button>
      </div>
    </div>
  );
};

export default QuestionSec;

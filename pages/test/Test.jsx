import React from "react";
import EndAdornment from "../../components/Inputs/components/EndAdornment";
import Head from "next/head";
import styles from "./Test.styles.module.scss";

import LandingSection from "./sections/LandingSection";
import ListSection from "./sections/ListSection";
import OrderSection from "./sections/OrderSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import StepsSection from "./sections/StepsSection";
import FAQSection from "./sections/FAQSection";
import Form from "../../components/Form";
import TextInput from "../../components/Inputs/TextInput";

const mockData = [
  {
    label: "Value 1",
    value: "value1",
    endAdornment: (
      <EndAdornment text="Most popular" variant="chip" color="orange" />
    ),
  },
  {
    label: "Value 2",
    value: "value2",
    endAdornment: (
      <EndAdornment text="Best quality" variant="chip" color="green" />
    ),
  },
  {
    label: "Value 3",
    value: "value3",
  },
  {
    label: "Value 4",
    value: "value4",
    endAdornment: (
      <EndAdornment text="Most popular" variant="chip" color="orange" />
    ),
  },
  {
    label: "Value 5",
    value: "value5",
    endAdornment: (
      <EndAdornment text="Best quality" variant="chip" color="green" />
    ),
  },
  //   {
  //     label: "Value 6",
  //     value: "value6",
  //   },
  //   {
  //     label: "Value 7",
  //     value: "value7",
  //     endAdornment: (
  //       <EndAdornment text="Most popular" variant="chip" color="orange" />
  //     ),
  //   },
  //   {
  //     label: "Value 8",
  //     value: "value8",
  //     endAdornment: (
  //       <EndAdornment text="Best quality" variant="chip" color="green" />
  //     ),
  //   },
  //   {
  //     label: "Value 9",
  //     value: "value9",
  //   },
];

const Test = () => {
  return (
    <div>
      <Head>
        <title>Pure Blue - Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/faviconn.ico" />
      </Head>
      <main>
        <LandingSection />
        <ListSection />
        <OrderSection />
        <TestimonialsSection />
        <StepsSection />
        <FAQSection />
        <LandingSection variant="secondary" />
      </main>
    </div>
  );
};

export default Test;

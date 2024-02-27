import React from "react";
import Form from "../../../../../../components/Form";
import Radio from "../../../../../../components/Inputs/Radio";
import EndAdornment from "../../../../../../components/Inputs/components/EndAdornment";

import styles from "./OrderSectionForm.styles.module.scss";
import Select from "../../../../../../components/Inputs/Select";
import Button from "../../../../../../components/Button";

const mockData = [
  {
    label: "8 tablets",
    value: "8",
  },
  {
    label: "16 tablets",
    value: "16",
    endAdornment: (
      <EndAdornment text="Most popular" variant="chip" color="orange" />
    ),
  },
  {
    label: "32 tablets",
    value: "32",
    endAdornment: (
      <EndAdornment text="Best price" variant="chip" color="blue" />
    ),
  },
];

const OrderSectionFormFields = () => {
  return (
    <>
      <div className={styles.strength}>
        <h6>Select your pill strength:</h6>
        <Radio
          name="strength"
          label="25mg"
          value="25mg"
          variant="contained"
          endAdornment={<EndAdornment text="Low" />}
        />
        <Radio
          name="strength"
          label="50mg"
          value="50mg"
          variant="contained"
          endAdornment={
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <EndAdornment text="Most popular" variant="chip" color="orange" />
              <EndAdornment text="Standard" />
            </div>
          }
        />
        <Radio
          name="strength"
          label="100mg"
          value="100mg"
          variant="contained"
          endAdornment={<EndAdornment text="High" />}
        />
      </div>
      <div className={styles.package}>
        <h6>Select your treatment package:</h6>
        <Select name="package" items={mockData} />
      </div>
      <div className={styles.price}>
        <div className={styles.priceWrapper}>
          <h1>$56.99</h1>
          <p>
            Only <span>$3.56</span> per pill
          </p>
        </div>
        <Button
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
          Get started now
        </Button>
      </div>
    </>
  );
};

const OrderSectionForm = () => {
  const handleSubmit = async (values) => {};
  return (
    <div className={styles.container}>
      <Form
        onSubmit={handleSubmit}
        defaultValues={{ strength: "", package: "" }}
      >
        <OrderSectionFormFields />
      </Form>
    </div>
  );
};

export default OrderSectionForm;

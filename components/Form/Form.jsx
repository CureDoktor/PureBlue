import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const Form = ({ defaultValues, onSubmit, children }) => {
  const methods = useForm({
    mode: "all",
    defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <form
        enctype="multipart/form-data"
        noValidate
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;

import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export const Form = ({ defaultValues, onSubmit, children }) => {
  const methods = useForm({
    mode: "all",
    defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

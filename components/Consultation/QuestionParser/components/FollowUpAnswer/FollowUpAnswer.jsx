import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const FollowUpAnswer = ({
  name,
  afterField,
  dependingOnQuestion,
  children,
}) => {
  const { watch, resetField } = useFormContext();
  const values = watch(dependingOnQuestion || name) || [];
  const isFieldSelected = values?.includes(String(afterField));

  useEffect(() => {
    if (!isFieldSelected) resetField(name);
  }, [isFieldSelected]);

  if (!isFieldSelected && afterField) return null;

  return children;
};

export default FollowUpAnswer;

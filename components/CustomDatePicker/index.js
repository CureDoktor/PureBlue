import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./styles.module.scss";

const CustomDatePicker = () => {
  // Function to generate an array of numbers from start to end
  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(i);
    }
    return options;
  };

  // Generate options for days (1 to 31)
  const dayOptions = generateOptions(1, 31);

  // Generate options for months (January to December)
  const monthOptions = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Generate options for years (from current year to 100 years back)
  const currentYear = new Date().getFullYear();
  const yearOptions = generateOptions(currentYear - 100, currentYear);

  return (
    <Formik
      initialValues={{ day: "", month: "", year: "" }}
      validate={(values) => {
        console.log(values);
        const errors = {};
        if (!values.day) {
          errors.day = "Required";
        }
        if (!values.month) {
          errors.month = "Required";
        }
        if (!values.year) {
          errors.year = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // Handle form submission here
        console.log(values);
        // setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={styles.dateContainer}>
            <div>
              <Field as="select" name="day">
                <option value="">Day</option>
                {dayOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="day" component="div" className="error" />
            </div>
            <div>
              <Field as="select" name="month">
                <option value="">Month</option>
                {monthOptions.map((option, index) => (
                  <option key={index} value={index + 1}>
                    {option}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="month" component="div" className="error" />
            </div>
            <div>
              <Field as="select" name="year">
                <option value="">Year</option>
                {yearOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="year" component="div" className="error" />
            </div>
          </div>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomDatePicker;

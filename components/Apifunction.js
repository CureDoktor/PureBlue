export default function ApiError(errorData) {
  if (errorData.errors) {
    if (
      typeof errorData.errors === "object" &&
      Object.keys(errorData.errors).length > 0
    ) {
      const rest = Object.entries(errorData.errors);
      var values = "";
      rest.map(([question, answer]) => {
        values = values + answer + "\n";
      });

      return values;
    } else {
      return "Request error!";
    }
  } else if (errorData.message) {
    if (errorData.message != null) {
      return errorData.message;
    } else {
      return "Request error!";
    }
  } else {
    return "Request error!";
  }
}

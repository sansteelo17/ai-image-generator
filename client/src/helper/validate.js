import toast from "react-hot-toast";

export const formValidate = async (values) => {
  const error = {};

  const formIsValid = values.prompt.trim().length > 0;

  if (!formIsValid) {
    error.exist = toast.error("Invalid credentials");
  }

  return error;
};

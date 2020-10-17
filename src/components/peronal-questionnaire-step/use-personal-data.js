import { useFormik } from "formik";
import { useSelector } from "react-redux";

import { submitPersonalStep } from "../../store";

const usePersonalData = () => {
  const fullName = useSelector((state) => state.fullName);
  const email = useSelector((state) => state.email);

  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: { fullName, email },
    onSubmit: submitPersonalStep,
  });

  return [
    { values, touched, errors },
    { onChange: handleChange, onSubmit: handleSubmit },
  ];
};

export default usePersonalData;

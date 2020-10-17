import { useFormik } from "formik";

const usePersonalData = () => {
  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: { fullName: "", email: "" },
    onSubmit: () => console.log("submit"),
  });

  return [
    { values, touched, errors },
    { onChange: handleChange, onSubmit: handleSubmit },
  ];
};

export default usePersonalData;

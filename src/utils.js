export const getFormikError = (name, errors, touched) =>
  touched[name] && errors[name];

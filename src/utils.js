export const getFormikError = (name, errors, touched) =>
  touched[name] && errors[name];

export const filterDuplicate = (array) => [...new Set(array)];

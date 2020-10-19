export const getFormikError = (name, errors, touched) =>
  touched[name] && errors[name];

export const filterDuplicate = (array) => [...new Set(array)];

export const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

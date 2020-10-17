export const personalStep = { slug: "personal", title: "Введитя имя и e-mail" };

export const locationStep = {
  slug: "location",
  title: "Выберите страну и город",
};

export const socialsStep = {
  slug: "socials",
  title: "Отметьте социальные сети",
};

export const favoriteAnimalStep = {
  slug: "favorite-animal",
  title: "Выберите любимого котика",
};

const stepInOrderList = [
  personalStep,
  locationStep,
  socialsStep,
  favoriteAnimalStep,
];

export const stepSlugInOrderList = stepInOrderList.map(({ slug }) => slug);

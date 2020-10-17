import firstCatImage from "./assets/images/cat1.jpg";
import secondCatImage from "./assets/images/cat2.jpg";
import thirdCatImage from "./assets/images/cat3.jpg";
import dogImage from "./assets/images/dog4.jpg";

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
  // locationStep,
  socialsStep,
  favoriteAnimalStep,
];

export const stepSlugInOrderList = stepInOrderList.map(({ slug }) => slug);

export const animalKinds = {
  cat: "cat",
  dog: "dog",
};

export const animalList = [
  {
    slug: "first-cat",
    kind: animalKinds.cat,
    image: { title: "First cat", normal: firstCatImage, double: firstCatImage },
  },
  {
    slug: "second-cat",
    kind: animalKinds.cat,
    image: {
      title: "Second cat",
      normal: secondCatImage,
      double: secondCatImage,
    },
  },
  {
    slug: "third-cat",
    kind: animalKinds.cat,
    image: { title: "First cat", normal: thirdCatImage, double: thirdCatImage },
  },
  {
    slug: "dog",
    kind: animalKinds.dog,
    image: { title: "Dog", normal: dogImage, double: dogImage },
  },
];

export const socialList = [
  { slug: "facebook", title: "Facebook" },
  { slug: "vk", title: "Вконтакте" },
  { slug: "twitter", title: "Twitter" },
  { slug: "ok", title: "Одноклассники" },
];

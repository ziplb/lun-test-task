import firstCatImage from "./assets/images/cat1.jpg";
import firstCatDoubleImage from "./assets/images/cat1@2x.jpg";
import secondCatImage from "./assets/images/cat2.jpg";
import secondCatDoubleImage from "./assets/images/cat2@2x.jpg";
import thirdCatImage from "./assets/images/cat3.jpg";
import thirdCatDoubleImage from "./assets/images/cat3@2x.jpg";
import dogImage from "./assets/images/dog4.jpg";
import dogDoubleImage from "./assets/images/dog4@2x.jpg";

import countries from "./assets/documents/countries.json";
import cities from "./assets/documents/cities.json";

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

export const animalKinds = {
  cat: "cat",
  dog: "dog",
};

export const animalList = [
  {
    slug: "first-cat",
    kind: animalKinds.cat,
    image: {
      title: "First cat",
      normal: firstCatImage,
      double: firstCatDoubleImage,
    },
  },
  {
    slug: "second-cat",
    kind: animalKinds.cat,
    image: {
      title: "Second cat",
      normal: secondCatImage,
      double: secondCatDoubleImage,
    },
  },
  {
    slug: "third-cat",
    kind: animalKinds.cat,
    image: {
      title: "First cat",
      normal: thirdCatImage,
      double: thirdCatDoubleImage,
    },
  },
  {
    slug: "dog",
    kind: animalKinds.dog,
    image: { title: "Dog", normal: dogImage, double: dogDoubleImage },
  },
];

export const socialList = [
  { slug: "facebook", title: "Facebook" },
  { slug: "vk", title: "Вконтакте" },
  { slug: "twitter", title: "Twitter" },
  { slug: "ok", title: "Одноклассники" },
];

export const countryList = Object.entries(countries).map(([slug, title]) => ({
  slug,
  title,
}));

export const cityList = Object.entries(cities).map(
  ([slug, { country, name }]) => ({
    slug,
    title: name,
    countrySlug: String(country),
  })
);

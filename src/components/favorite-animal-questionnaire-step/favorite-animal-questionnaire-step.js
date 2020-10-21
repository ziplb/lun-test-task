import React from "react";

import QuestionnaireStep from "../questionnaire-step/questionnaire-step";
import AnimalRadio from "../animal-radio/animal-radio";

import { animalList, favoriteAnimalStep } from "../../data";
import { getFormikError } from "../../utils";
import useFavoriteAnimalData from "./use-favorite-animal-data";
import "./favorite-animal-questionnaire-step.css";

const FavoriteAnimalQuesitonnaireStep = () => {
  const [
    { values, errors, touched },
    { onFieldValueSet, onSubmit },
  ] = useFavoriteAnimalData();

  const error = getFormikError("favoriteAnimal", errors, touched);

  const checkIsFocusOnMount = (animal, index) => {
    if (!values.favoriteAnimal && index === 0) {
      return true;
    }

    return values.favoriteAnimal?.slug === animal.slug;
  };

  return (
    <div className="FavoriteAnimalQuesitonnaireStep">
      <QuestionnaireStep step={favoriteAnimalStep} onSubmit={onSubmit} isWide>
        <div className="FavoriteAnimalQuesitonnaireStep-gridHolder">
          <div className="FavoriteAnimalQuesitonnaireStep-grid">
            {animalList.map((animal, index) => (
              <div
                key={animal.slug}
                className="FavoriteAnimalQuesitonnaireStep-item"
              >
                <AnimalRadio
                  name="favoriteAnimal"
                  image={animal.image}
                  value={animal.slug}
                  checked={values.favoriteAnimal?.slug === animal.slug}
                  isFocusOnMount={checkIsFocusOnMount(animal, index)}
                  onChange={() => onFieldValueSet("favoriteAnimal", animal)}
                />
              </div>
            ))}
          </div>
        </div>

        {error && (
          <div className="FavoriteAnimalQuesitonnaireStep-error">{error}</div>
        )}
      </QuestionnaireStep>
    </div>
  );
};

export default FavoriteAnimalQuesitonnaireStep;

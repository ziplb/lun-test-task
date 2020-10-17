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
    { onChange, onSubmit },
  ] = useFavoriteAnimalData();

  const error = getFormikError("favoriteAnimalSlug", errors, touched);

  return (
    <div className="FavoriteAnimalQuesitonnaireStep">
      <QuestionnaireStep
        step={favoriteAnimalStep}
        onSubmit={onSubmit}
        isAutoWidth
      >
        <div className="FavoriteAnimalQuesitonnaireStep-grid">
          {animalList.map(({ slug, image }) => (
            <div key={slug} className="FavoriteAnimalQuesitonnaireStep-item">
              <AnimalRadio
                name="favoriteAnimalSlug"
                image={image}
                value={slug}
                checked={values.favoriteAnimalSlug === slug}
                onChange={onChange}
              />
            </div>
          ))}
        </div>

        {error && (
          <div className="FavoriteAnimalQuesitonnaireStep-error">{error}</div>
        )}
      </QuestionnaireStep>
    </div>
  );
};

export default FavoriteAnimalQuesitonnaireStep;

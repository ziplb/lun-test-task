import React from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

import OverviewCard from "../overview-card/overview-card";
import Button from "../button/button";

import {
  restart,
  useFullName,
  useEmail,
  useSocialList,
  useFavoriteAnimal,
  useCity,
  useCountry,
} from "../../store";
import { getQuestionnaireFirstStepLink } from "../../routes";
import { shuffleArray } from "../../utils";
import { animalList } from "../../data";
import useRedirectToQuestionnaireIfItNotFinished from "./use-redirect-to-questionnaire-if-it-not-finished";

import "./overview.css";

const filterEmptySocials = ({ value }) => value;

const Overview = () => {
  const { push } = useHistory();
  useRedirectToQuestionnaireIfItNotFinished();

  const fullName = useFullName();
  const email = useEmail();
  const country = useCountry();
  const city = useCity();
  const socialList = useSocialList();
  const favoriteAnimal = useFavoriteAnimal();

  const handleClick = () => {
    restart();
    push(getQuestionnaireFirstStepLink());
    shuffleArray(animalList);
  };

  return (
    <div className="Overview">
      <Helmet>
        <title>ЛУН - Предпросмотр</title>
      </Helmet>

      <div className="Overview-card">
        <OverviewCard
          fullName={fullName}
          email={email}
          city={city?.title}
          country={country?.title}
          socialList={socialList.filter(filterEmptySocials)}
          image={favoriteAnimal?.image}
        />
      </div>

      <div className="Overview-restartButton">
        <Button title="Пройти заново" onClick={handleClick} isPrimary />
      </div>
    </div>
  );
};

export default Overview;

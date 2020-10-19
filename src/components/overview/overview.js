import React from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

import OverviewCard from "../overview-card/overview-card";
import Button from "../button/button";

import { restart } from "../../store";
import { getQuestionnaireFirstStepLink } from "../../routes";
import {
  useRedirectToQuestionnaireIfItNotFinished,
  useDataFromRedux,
} from "../../hooks";
import { shuffleArray } from "../../utils";
import { animalList } from "../../data";

import "./overview.css";

const Overview = () => {
  const [{ fullName, email, socialList, favoriteAnimal }] = useDataFromRedux();
  const { push } = useHistory();
  useRedirectToQuestionnaireIfItNotFinished();

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
          city="Kiev"
          country="Ukraine"
          socialList={socialList.filter(({ value }) => value)}
          image={favoriteAnimal?.image || {}}
        />
      </div>

      <div className="Overview-restartButton">
        <Button title="Пройти заново" onClick={handleClick} isPrimary />
      </div>
    </div>
  );
};

export default Overview;

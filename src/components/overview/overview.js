import React from "react";
import { useSelector } from "react-redux";

import OverviewCard from "../overview-card/overview-card";
import { animalList } from "../../data";

import "./overview.css";

const Overview = () => {
  const fullName = useSelector((state) => state.fullName);
  const email = useSelector((state) => state.email);
  const socials = useSelector((state) => state.socials);
  const favoriteAnimal = useSelector((state) => state.favoriteAnimal);

  console.log(
    "state: ",
    useSelector((state) => state)
  );

  return (
    <div className="Overview">
      <OverviewCard
        fullName={fullName}
        email={email}
        city="Kiev"
        country="Ukraine"
        socialList={[]}
        image={favoriteAnimal.image}
      />
    </div>
  );
};

export default Overview;

import React from "react";

import Image from "../image/image";
import SquareImagePositioner from "../square-image-positioner/square-image-positioner";

import "./overview-card.css";

const OverviewCard = ({
  fullName,
  email,
  city,
  country,
  socialList,
  image,
}) => (
  <div className="OverviewCard">
    <div className="OverviewCard-contentCol">
      <div className="OverviewCard-personal">
        <h2 className="OverviewCard-fullName">{fullName}</h2>
        <div className="OverviewCard-email">{email}</div>
      </div>

      <div className="OverviewCard-location">
        {city}, {country}
      </div>

      <ul className="OverviewCard-socialList">
        {socialList.map(({ title, value }, id) => (
          <li key={id} className="OverviewCard-socialItem">
            <div className="OverviewCard-social">
              <span className="OverviewCard-socialTitle">{title}:</span>

              <a href={value} className="OverviewCard-socialLink">
                {value}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <div className="OverviewCard-imageCol">
      <SquareImagePositioner>
        <Image image={image} isAdaptable />
      </SquareImagePositioner>
    </div>
  </div>
);

export default OverviewCard;

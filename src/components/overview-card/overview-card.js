import React from "react";

import Image from "../image/image";

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
        {socialList.map(({ title, link }, id) => (
          <li key={id} className="OverviewCard-socialItem">
            <div className="OverviewCard-social">
              <span className="OverviewCard-socialTitle">{title}:</span>

              <a href={link} className="OverviewCard-socialLink">
                {link}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <div className="OverviewCard-imageCol">
      <div className="OverviewCard-imagePositioner">
        <div className="OverviewCard-imageHolder">
          <Image image={image} isAdaptable />
        </div>
      </div>
    </div>
  </div>
);

export default OverviewCard;

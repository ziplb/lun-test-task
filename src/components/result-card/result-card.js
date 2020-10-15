import React from "react";

import Image from "../image/image";

const ResultCard = ({ fullName, email, city, country, socialList, image }) => (
  <div className="ResultCard">
    <div className="ResultCard-contentCol">
      <div className="ResultCard-personal">
        <div className="ResultCard-fullName">{fullName}</div>
        <div className="ResultCard-email">{email}</div>
      </div>

      <div className="ResultCard-location">
        {city}, {country}
      </div>

      <ul className="ResultCard-socialList">
        {socialList.map(({ title, link }, id) => (
          <li key={id} className="ResultCard-socialItem">
            <div className="ResultCard-social">
              <span className="ResultCard-socialTitle">{title}</span>

              <a href={link} className="ResultCard-socialLink">
                {link}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <div className="ResultCard-imageCol">
      <div className="ResultCard-imageHolder">
        <Image image={image} />
      </div>
    </div>
  </div>
);

export default ResultCard;

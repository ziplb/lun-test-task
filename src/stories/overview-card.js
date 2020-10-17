import React from "react";
import { number } from "@storybook/addon-knobs";
import { dogImageSeeds } from "./seeds";
import { ControlSize } from ".storybook/decorators";

import OverviewCard from "../components/overview-card/overview-card";

const socialList = [
  { title: "Facebook", link: "https://facebook.com" },
  { title: "Twitter", link: "https://facebook.com" },
  { title: "Одноклассники", link: "https://ok.ru" },
  { title: "Вконтакте", link: "https://vk.com" },
];

export const main = () => (
  <OverviewCard
    fullName="Yaroslav Illiashenko"
    email="ziplb.work@gmail.com"
    country="Ukraine"
    city="Kiev"
    socialList={socialList.slice(
      0,
      number("Socials amount", 2, { min: 0, max: 4 })
    )}
    image={dogImageSeeds}
  />
);

export default {
  title: "OverviewCard",
  decorators: [(story) => <ControlSize width={520} story={story} />],
};

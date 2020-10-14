export const prepareIcons = (components) => {
  const iconTitleList = Object.keys(components).filter(
    (title) => title.startsWith("Icon") && title !== "IconContainer"
  );

  const iconList = iconTitleList.map((title) => ({
    title: title.slice(4).replace(/([A-Z])/g, " $1"),
    component: components[title],
  }));

  return iconList;
};

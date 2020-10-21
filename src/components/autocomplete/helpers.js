import computeScrollIntoView from "compute-scroll-into-view";

export const scrollIntoView = (rootEl, el) => {
  const actions = computeScrollIntoView(el, {
    boundary: rootEl,
    block: "nearest",
  });

  actions.forEach(({ el, top, left }) => {
    el.scrollTop = top;
    el.scrollLeft = left;
  });
};

export const filterOptionList = (list, value) =>
  list.filter(
    ({ title }) => title.toLowerCase().indexOf(value.toLowerCase()) === 0
  );

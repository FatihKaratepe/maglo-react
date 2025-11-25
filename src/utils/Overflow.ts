export const isTextOverflowing = (element: HTMLElement) => {
  return element.scrollWidth > element.clientWidth;
};

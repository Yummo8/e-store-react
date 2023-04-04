export const disableScroll = () => {
  const withScroll = window.innerWidth - document.body.offsetWidth;
  document.body.style.cssText = `overflow: hidden; padding-right: ${withScroll}px`;
};

export const enableScroll = () => {
  document.body.style.cssText = '';
};
